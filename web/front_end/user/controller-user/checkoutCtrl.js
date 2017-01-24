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

    $scope.email = document.getElementsByName('pay_email')[0].value;

    
    $scope.toSend = {
        "email" : $scope.email,
        "CVV": $scope.CVV,
        "cart": $scope.cart
    };

    $scope.pay = function() {
        productFactory.orderProducts($scope.toSend).then(function(response){
			response = response.data;
            $scope.switchTo('/home');
            cacheService.reset();
		})
    }

}]);
