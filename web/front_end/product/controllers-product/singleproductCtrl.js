var app = angular.module('app');

app.controller('singleproductCtrl', ['$scope', 'cacheService', '$routeParams',

  function($scope, cacheService, $routeParams) {

    $scope.productId = $routeParams.productId;

 	$scope.selectedProd = cacheService.allProducts().then (function(value ){
 		$scope.selectedProd = value[$scope.productId];

 	});
 

  }]);
