var app = angular.module('app', ['autocomplete','ngRoute','ngTouch','ngAnimate', 'ui.bootstrap','angular-cache','httpPostFix']).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
});

app.run(['$rootScope', '$location', function($rootScope, $location) {

    $rootScope.switchTo = function(headed) {
        return $location.path(headed);
    };


    $rootScope.checkVariation = function(variation){
        if (variation >0)
        {
            return "redclass";
        }
        else {
            return "greenclass";
        }
    };
}]);


app.controller('MyCtrl',['$scope', 'ProductRetriever', '$rootScope','cacheService', function($scope, ProductRetriever,$rootScope, cacheService) {

    $scope.productsName = [];
    var getNames = function(tab) {
        var pn = []
        for (var i = 0; i < tab.length; i++) {
            if (pn.indexOf(tab[i].ProductName) == -1) {
                pn.push(tab[i].ProductName);
            }
        }

        return pn;
    }

    $scope.pr = [];

    $scope.products = cacheService.allProducts();
    $scope.products.then(function(resp) {
        $scope.pr = resp;
        $scope.products = ProductRetriever.getproducts("...", getNames($scope.pr), getNames($scope.pr));
        $scope.products.then(function(data) {
            $scope.products = getNames($scope.pr);
        });

    });

    $scope.getproducts = function() {
        return $scope.products;
    }

    $scope.doSomething = function(typedthings) {
        $rootScope.lookingFor = typedthings;
        $scope.newproducts = ProductRetriever.getproducts(typedthings, getNames($scope.pr), getNames($scope.pr));
        $scope.newproducts.then(function(data) {
            $scope.products = data;
        });
    }


$scope.redirect = function(result) {
    $rootScope.lookingFor = result;
    $scope.switchTo('/show');
}


    $scope.doSomethingElse = function(suggestion) {
        $scope.redirect(suggestion);
    }

}]);