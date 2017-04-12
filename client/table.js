angular.module('app.table', [])

  .controller('tableCtrl', ['$scope', 'uiGridValidateService', '$window', 'Factory', function($scope, uiGridValidateService, $window, Factory){

    var checkVacancy = function(status) {
      var nonSpecies = ['VACANT', 'VACANT PLANTING SITE', ''];
      if (status === undefined || nonSpecies.includes(status.toUpperCase())) {
        return true;
      }
      return false;
    };

    //update DBH and condition when updating species
    var checkSpecies = function(oldValue, newValue, rowEntity) {
      //previous vacancy now a species
      if (checkVacancy(oldValue) && !checkVacancy(newValue)) {
        if (rowEntity.DBH <= 0) {
          $window.alert('Please update DBH to a number greater than 0.');
          rowEntity.DBH = 'TBD';
        }
        if (rowEntity.Condition.toUpperCase() === 'N/A') {
          $window.alert('Please update current condition.');
          rowEntity.Condition = 'TBD';
        }
        return false;
      }
      //previous species now a vacancy
      if (!checkVacancy(oldValue) && checkVacancy(newValue)) {
        rowEntity.DBH = 0;
        rowEntity.Condition = 'N/A';
        return false;
      }
      return true;
    };

    //require positive DBH on existing species
    var checkDBH = function(oldValue, newValue, rowEntity) {
      if (newValue <= 0) {
        if (!checkVacancy(rowEntity.Species)) {
          $window.alert('Unable to update table: \nDBH must be greater than 0 for existing trees.');
          rowEntity.DBH = oldValue;
          return false;
        }
      }
      return true;
    }

  //require non-n/a condition on existing species
    var checkCondition = function(oldValue, newValue, rowEntity) {
      if (newValue.toUpperCase() === 'N/A') {
        if (!checkVacancy(rowEntity.Species)) {
          $window.alert('Unable to update table: \n"N/A" is not a valid condition for existing trees.');
          rowEntity.Condition = oldValue;
          return false;
        }
      }
      return true;
    };

    uiGridValidateService.setValidator('updateSpecies',
      function(argument) {
        return function(oldValue, newValue, rowEntity, colDef) {
          // console.log(oldValue, newV alue, rowEntity, colDef);
          return !newValue ? true : checkSpecies(oldValue, newValue, rowEntity);
        };
      },
      function() { return true; }
    );

    uiGridValidateService.setValidator('updateDBH',
      function(argument) {
        return function(oldValue, newValue, rowEntity, colDef) {
          // console.log(oldValue, newValue, rowEntity, colDef);
          return (newValue || newValue === 0) ? checkDBH(oldValue, newValue, rowEntity) : true;
        };
      },
      function() { return true; }
    );

    uiGridValidateService.setValidator('updateCondition',
      function(argument) {
        return function(oldValue, newValue, rowEntity, colDef) {
          // console.log(oldValue, newV alue, rowEntity, colDef);
          return !newValue ? true : checkCondition(oldValue, newValue, rowEntity);
        };
      },
      function() { return true; }
    );


    $scope.treeTable = {

      columnDefs: [
        { name: 'ID' },
        { name: 'Address' },
        { name: 'Street' },
        { name: 'Side' },
        { name: 'Site' },
        { name: 'Species',
          validators: {required: true, updateSpecies: ''}, cellTemplate: 'ui-grid/cellTitleValidator' },
        { name: 'DBH',
          validators: {required: true, updateDBH: ''}, cellTemplate: 'ui-grid/cellTitleValidator' },
        { name: 'Condition',
          validators: {required: true, updateCondition: ''}, cellTemplate: 'ui-grid/cellTitleValidator' }
      ],

      enableCellEditOnFocus: true,
      enableGridMenu: true,
      enableSelectAll: true,
      exporterCsvFilename: 'treeData.csv',
      exporterPdfDefaultStyle: {fontSize: 9},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'green'},
      exporterPdfHeader: { text: 'Tree Data', style: 'headerStyle' },
      exporterPdfFooter: function ( currentPage, pageCount ) {
        return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
      },
      exporterPdfCustomFormatter: function ( docDefinition ) {
        docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
        docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
        return docDefinition;
      },
      exporterPdfOrientation: 'landscape',
      exporterPdfPageSize: 'LETTER',
      exporterPdfMaxGridWidth: 500,
      exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    };

    $scope.treeTable.data = Factory.getData();

    $scope.treeTable.onRegisterApi = function(gridApi){
      $scope.gridApi = gridApi;
      gridApi.validate.on.validationFailed($scope, function() {});
    };

    $scope.showDuplicates = function() {
      $scope.treeTable.data = Factory.findDuplicates();
      $scope.duplicates = true;
    }

    $scope.showAll = function() {
      $scope.treeTable.data = Factory.getData();
      $scope.duplicates = false;
    }

    $scope.duplicates = false;

  }]);
