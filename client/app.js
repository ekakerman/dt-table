angular.module('app', ['app.table', 'app.factory', 'ngRoute', 'ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.validate', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.moveColumns'])
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
