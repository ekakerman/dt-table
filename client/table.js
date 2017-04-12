angular.module('app.table', [])

  .controller('tableCtrl', ['$scope', 'uiGridValidateService', '$window', function($scope, uiGridValidateService, $window){

    //don't allow n/a updates on existing species
    var checkCondition = function(oldValue, newValue, rowEntity) {
      if (newValue.toUpperCase() === 'N/A') {
        if (rowEntity.Species.toUpperCase() !== 'VACANT' && rowEntity.Species.toUpperCase() !== 'VACANT PLANTING SITE' && rowEntity.Species !== '') {
          $window.alert('Unable to update table: \n"N/A" is not a valid condition for existing trees.');
          rowEntity.Condition = oldValue;
          return false;
        }
      }
      return true;
    }

    uiGridValidateService.setValidator('updateCondition',
      function(argument) {
        return function(oldValue, newValue, rowEntity, colDef) {
          // console.log(oldValue, newV alue, rowEntity, colDef);
          return !newValue ? true : checkCondition(oldValue, newValue, rowEntity);
        };
      },
      function() {
        $scope.msg = 'If the tree species exists, please designate a valid condition';
        return true;
      }
    );

    $scope.treeTable = {

      columnDefs: [
        { name: 'ID' },
        { name: 'Address' },
        { name: 'Street' },
        { name: 'Side' },
        { name: 'Site' },
        { name: 'Species' },
        { name: 'DBH' },
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

    $scope.treeTable.data = [
      {
        ID: 1,
        Address: '3728',
        Street: 'Fishcreek Rd',
        Side: 'Front',
        Site: 1,
        Species: 'Acer Rubrum',
        DBH: 21,
        Condition: 'Good'
      },
      {
        ID: 2,
        Address: '3728',
        Street: 'Fishcreek Rd',
        Side: 'Front',
        Site: 2,
        Species: 'Acer Rubrum',
        DBH: 18,
        Condition: 'Fair'
      },
      {
        ID: 3,
        Address: '3728',
        Street: 'Fishcreek Rd',
        Side: 'Front',
        Site: 3,
        Species: 'Acer Rubrum',
        DBH: 19,
        Condition: 'Poor'
      },
      {
        ID: 4,
        Address: '3728',
        Street: 'Fishcreek Rd',
        Side: 'Front',
        Site: 3,
        Species: 'Vacant Planting Site',
        DBH: 0,
        Condition: 'N/A'
      },
      {
        ID: 5,
        Address: '3728',
        Street: 'Fishcreek Rd',
        Side: 'Front',
        Site: 4,
        Species: 'Acer Rubrum',
        DBH: 20,
        Condition: 'Dead'
      },
      {
        ID: 6,
        Address: '3738',
        Street: 'Fishcreek Rd',
        Side: 'Front',
        Site: 1,
        Species: 'Vacant Planting Site',
        DBH: 0,
        Condition: 'N/A'
      },
      {
        ID: 7,
        Address: '3738',
        Street: 'Fishcreek Rd',
        Side: 'Front',
        Site: 1,
        Species: 'Fraxinus spp.',
        DBH: 12,
        Condition: 'Dead'
      }
    ];

    $scope.treeTable.onRegisterApi = function(gridApi){
      $scope.gridApi = gridApi;
      gridApi.validate.on.validationFailed($scope, function() {});
    };

  }]);
