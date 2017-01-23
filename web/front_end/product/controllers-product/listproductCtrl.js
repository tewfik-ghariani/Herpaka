var app = angular.module('app');

app.controller('listproductCtrl', ['$scope', 'cacheService',
  function ($scope, cacheService) {

	$scope.adding = [];

  $scope.products = cacheService.allProducts().then(function(value) {
        $scope.products =  value;
      });

  $scope.switchOn = function (index) {
  $scope.adding[index] = true;  };



  $scope.switchOff = function (prod,qte,index) {
  	$scope.adding[index] = false;
    cacheService.addToCart(prod,qte);
  };

  }]);
