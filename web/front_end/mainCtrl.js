var userControllers = angular.module('app');

userControllers.controller('mainCtrl', ['$scope', '$routeParams',

  function($scope, $routeParams) {

    $scope.userId = $routeParams.userId;

  }]);
