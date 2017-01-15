var app = angular.module('app');

app.controller('loginCtrl', ['$scope', '$routeParams',

  function($scope, $routeParams) {

    $scope.userId = $routeParams.userId;

  }]);
