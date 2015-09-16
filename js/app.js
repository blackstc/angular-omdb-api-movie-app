var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl: "../partials/home.html",
    controller: "HomeController"
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
