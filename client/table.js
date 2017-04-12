angular.module('app.table', [])

  .controller('tableCtrl', ['$scope', function($scope){

    $scope.treeTable = {

      columnDefs: [
        { name: 'ID' },
        { name: 'Address' },
        { name: 'Street' },
        { name: 'Side' },
        { name: 'Site' },
        { name: 'Species' },
        { name: 'DBH' },
        { name: 'Condition' }
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

  }]);
