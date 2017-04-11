angular.module('app.table', [])
  .controller('tableCtrl', function($scope) {

    $scope.data = [
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

  });
