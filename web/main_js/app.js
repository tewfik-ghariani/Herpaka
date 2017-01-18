<<<<<<< HEAD
var app = angular.module('app', ['autocomplete','ngRoute','ngTouch', 'ui.bootstrap','angular-cache']).config(function($interpolateProvider){
=======
var app = angular.module('app', ['autocomplete', 'ngRoute', 'ngTouch', 'ui.bootstrap']).config(function($interpolateProvider) {
>>>>>>> DevDoflamingoo
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
});

app.run(['$rootScope', '$location', function($rootScope, $location) {

    $rootScope.switchTo = function(headed) {

        return $location.path(headed)

    };
}]);


app.controller('MyCtrl', function($scope, ProductRetriever, providerFactory) {

    /*$scope.products = ProductRetriever.getproducts("...");
    $scope.products.then(function(data){
      $scope.products = data;
    });*/
    $scope.productsName = [];
    var getNames = function(tab) {
        var pn = []
        for (var i = 0; i < tab.length; i++) {
            if (pn.indexOf(tab[i].ProductName) == -1) {
                pn.push(tab[i].ProductName);
            }
        }
        /*console.log('array')
        console.log(pn)*/
        return pn;
    }

    $scope.pr = [];
    $scope.products = providerFactory.fetchProducts();
    $scope.products.then(function(resp) {
        console.log('heeeeeere', resp.data.data);
        $scope.pr = resp.data.data;
        $scope.products = ProductRetriever.getproducts("...", getNames($scope.pr), getNames($scope.pr));
        $scope.products.then(function(data) {
            $scope.products = getNames($scope.pr);
        });

    });

    $scope.getproducts = function() {
        return $scope.products;
    }

    $scope.doSomething = function(typedthings) {
        console.log("Do something like reload data with this: " + typedthings);
        $scope.newproducts = ProductRetriever.getproducts(typedthings, getNames($scope.pr), getNames($scope.pr));
        $scope.newproducts.then(function(data) {
            $scope.products = data;
            console.log("did something: "+ suggestion);
        });
    }

    $scope.doSomethingElse = function(suggestion) {
        console.log("Suggestion selected: " + suggestion);
    }

});
