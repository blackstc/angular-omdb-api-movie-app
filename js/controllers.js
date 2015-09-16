app.controller("HomeController", function($scope) {
  $scope.message = "Hi";
});

app.controller('DogsController', function($scope){
    $scope.message = "Woof Woof!";
});

function widgetsController($scope, $route) {
    $scope.$route = $route;
}
