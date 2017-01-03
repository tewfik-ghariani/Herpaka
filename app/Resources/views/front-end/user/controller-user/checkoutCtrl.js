var userControllers = angular.module('userControllers', []);

userControllers.controller('checkoutCtrl', ['$scope', '$routeParams',

  function($scope, $routeParams) {

    $scope.userId = $routeParams.userId;

  }]);
