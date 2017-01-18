var app = angular.module('app');

app.controller('listproductCtrl', ['$scope', 'cacheService',
  function ($scope, cacheService) {


  $scope.products = cacheService.allProducts().then(function(value) {
        $scope.products =  value;
      });



  	$scope.checkVariation = function(variation){

  		if (variation >0)
  		{
  			return "redclass";
  		}
  		else {
  			return "greenclass";
  		}
  	}
  }]);
