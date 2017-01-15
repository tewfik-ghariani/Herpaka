var app = angular.module('app');

app.controller('listproductCtrl', ['$scope', 'providerFactory', 
  function ($scope, providerFactory) {

    	 	console.log(providerFactory);
  	$scope.products = providerFactory.fetchProducts().then(function(response){

  		$scope.products = response.data;
  	});



   
  }]);
