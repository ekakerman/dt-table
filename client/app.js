angular.module('app', ['app.table', 'ngRoute', 'ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.validate'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/table.html',
        controller: 'tableCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



// var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'ui.grid.validate', 'addressFormatter']);

// angular.module('addressFormatter', []).filter('address', function () {
//   return function (input) {
//       return input.street + ', ' + input.city + ', ' + input.state + ', ' + input.zip;
//   };
// });

