var app = angular.module('app');

app.controller('registerCtrl', ['$scope', '$routeParams',

  function($scope, $routeParams) {

    $scope.userId = $routeParams.userId;

  }]);
