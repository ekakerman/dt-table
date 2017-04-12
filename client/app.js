angular.module('app', ['app.table', 'ngRoute', 'ngTouch', 'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav'])
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
