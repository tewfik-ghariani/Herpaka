var app = angular.module('app');

app.controller('singleproductCtrl', ['$scope', '$routeParams',

  function($scope, $routeParams) {

    $scope.productId = $routeParams.productId;

  }]);
