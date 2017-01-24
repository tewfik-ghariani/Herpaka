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


  $scope.alerts = [];

  $scope.switchOff = function (prod,qte) {
  	$scope.adding = false;
    cacheService.addToCart(prod,qte);
    var msgToAdd = "Well Done! You successfully added "+qte + " instances of "+prod.ProductName+" to your cart!";
    $scope.alerts.push({type:'success', msg : msgToAdd });
  };



    $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };



  }]);
