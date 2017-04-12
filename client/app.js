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
