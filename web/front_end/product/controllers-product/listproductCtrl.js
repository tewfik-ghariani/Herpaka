var app = angular.module('app');

app.controller('listproductCtrl', ['$scope', 'productService',
  function ($scope, productService) {
/**
  	$scope.provider = providerFactory.fetchProducts().then(function(response){

  		$scope.provider = response.data;
  		if ($scope.provider.success) 
  		{
  			$scope.products =$scope.provider.data;
  		}
  	});
**/

  $scope.products = productService.allProducts();



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
