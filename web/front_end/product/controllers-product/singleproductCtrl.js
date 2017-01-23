var app = angular.module('app');

app.controller('singleproductCtrl', ['$scope', 'cacheService', '$routeParams',

  function($scope, cacheService, $routeParams) {


	$scope.adding = false;

    $scope.productId = $routeParams.productId;

 	$scope.selectedProd = cacheService.allProducts().then (function(value ){
 		$scope.selectedProd = value[$scope.productId];
 	});



  $scope.switchOn = function () {
  $scope.adding = true;  };



  $scope.switchOff = function (prod,qte) {
  	$scope.adding = false;
    cacheService.addToCart(prod,qte);
  };

  }]);
