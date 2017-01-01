var productControllers = angular.module('productControllers', []);

productControllers.controller('singleproductCtrl', ['$scope', '$routeParams',

  function($scope, $routeParams) {

    $scope.productId = $routeParams.productId;

  }]);
