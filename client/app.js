angular.module('app', ['app.table', 'ngRoute', 'ngTouch', 'ui.grid'])
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
