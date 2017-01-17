var app = angular.module('app');

app.config(['$routeProvider',
  function($routeProvider) {

  
      $routeProvider.
      when('/home', {
        templateUrl: "base.html",
        controller: 'mainCtrl'
      }).
      when('/show', {
        templateUrl: "listproduct.html",     
        controller: 'listproductCtrl'
      }).
      when('/products/:productId', {
        templateUrl: "signleproduct.html",
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
      when('/login', {
        templateUrl: "login.html",
        controller: 'loginCtrl'
      }).
      when('/register', {
        templateUrl: "register.html",
        controller: 'registerCtrl'
      }).
      when('/:userId/update', {
        templateUrl: "update.html",
        controller: 'updateCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);