angular.module('app.factory', [])

.factory('Factory', function ($location) {

    var data = [
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

    var getData = function() {
      return data;
    }

    var findDuplicates = function() {
      var unique = data.reduce(function(prev, next, index, arr) {
        var combo = next.Address + next.Street + next.Side + next.Site;
        if (prev[combo]) {
          prev[combo].ids.push(next);
        } else {
          prev[combo] = {
            ids: [next]
          }
        }
        return prev;
      }, {});

      return Object.keys(unique).reduce(function(prev, next, index, arr) {
        if (unique[next].ids.length > 1) {
          prev = prev.concat(unique[next].ids);
        }
        return prev;
      }, []);
    };

  return {
    getData: getData,
    findDuplicates: findDuplicates
  };

});