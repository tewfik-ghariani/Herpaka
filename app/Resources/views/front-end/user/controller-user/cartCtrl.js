var userControllers = angular.module('userControllers', []);

userControllers.controller('cartCtrl', ['$scope', '$routeParams',

  function($scope, $routeParams) {

    $scope.userId = $routeParams.userId;

  }]);
