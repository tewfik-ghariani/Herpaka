var app = angular.module('app', ['autocomplete','ngRoute','angular-cache']).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
});





app.run(['$rootScope', '$location',  function ($rootScope, $location) {

$rootScope.switchTo = function(headed) {

return $location.path(headed)

};


}]);


app.controller('MyCtrl', function($scope, MovieRetriever){

  $scope.movies = MovieRetriever.getmovies("...");
  $scope.movies.then(function(data){
    $scope.movies = data;
  });

  $scope.getmovies = function(){
    return $scope.movies;
  }

  $scope.doSomething = function(typedthings){
    console.log("Do something like reload data with this: " + typedthings );
    $scope.newmovies = MovieRetriever.getmovies(typedthings);
    $scope.newmovies.then(function(data){
    $scope.movies = data;
    console.log("did something: " + suggestion );
    });
  }

  $scope.doSomethingElse = function(suggestion){
    console.log("Suggestion selected: " + suggestion );
  }

});
