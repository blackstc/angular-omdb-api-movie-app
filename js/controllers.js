app.controller("HomeController", function($scope, $http) {
  $scope.results = true;

  $scope.search = function() {
    $scope.results = true;
    var title = $scope.userInput.search;
    $http.get("http://www.omdbapi.com/?s=" + title +"&r=json")
    .success(function(data) {
      console.log(data.Search);
      $scope.movies = data.Search;
    });
  };

  $scope.showMovie = function() {
    $scope.results = false;
    var id = this.movie.imdbID;
    $http.get("http://www.omdbapi.com/?i=" + id +"&r=json")
    .success(function(data) {
      console.log(data);
      $scope.movie = data;
    });
  };
});
