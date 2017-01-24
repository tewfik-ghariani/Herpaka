var app = angular.module('app');

app.controller('checkoutCtrl', ['$scope', 'cacheService', 'productFactory', 
	function($scope, cacheService, productFactory) {

    $scope.cart = cacheService.getCart();
    var infos = $scope.form;

    var sum = function(tab) {
    	var sum=0;
    	for (var i=0; i<tab.length; i++){
    		sum += tab[i].prod.Price;
    	}
    	return sum;
    }

    $scope.total = sum($scope.cart);

    var email = document.getElementsByName('pay_email')[0].value;

    $scope.pay = function() {
        productFactory.orderProducts().then(function(response){
			response = response.data;
		})
    }

}]);
