var app = angular.module('app');

app.config(['$routeProvider',
    function($routeProvider) {


        $routeProvider.
        when('/home', {
            templateUrl: "home.html",
            controller: 'mainCtrl'
        }).
        when('/show', {
            templateUrl: "listproduct.html",
            controller: 'listproductCtrl'
        }).
         when('/categories', {
            templateUrl: "categories.html",
            controller: 'categoriesCtrl'
        }).
        when('/show/:productId', {
            templateUrl: "singleproduct.html",
            controller: 'singleproductCtrl'
        }).
        when('/:userId/cart', {
            templateUrl: "cart.html",
            controller: 'cartCtrl'
        }).
        when('/:userId/checkout', {
            templateUrl: "checkout.html",
            controller: 'checkoutCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);
