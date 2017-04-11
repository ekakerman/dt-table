angular.module('app', ['app.table', 'ngRoute'])
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
