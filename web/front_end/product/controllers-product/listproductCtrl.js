var app = angular.module('app');

app.controller('listproductCtrl', ['$scope', 'productService',
  function ($scope, productService) {


  $scope.products = productService.allProducts().then(function(value) {
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
