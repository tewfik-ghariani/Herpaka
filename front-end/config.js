HerpakaApp.config(['$routeProvider',
  function($routeProvider) {
var module = angular.module('module', []) 
  
      $routeProvider.
      when('/products', {
        templateUrl: 'product/listproduct.html',
        controller: 'listproductCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'product/singleproduct.html',
        controller: 'singleproductCtrl'
      }).
      when('/user/:userId/cart', {
        templateUrl: 'user/cart.html',
        controller: 'cartCtrl'
      }).
      when('/user/:userId/checkout', {
        templateUrl: 'user/checkout.html',
        controller: 'checkoutCtrl'
      }).
      when('/user/login', {
        templateUrl: 'user/login.html',
        controller: 'loginCtrl'
      }).
      when('/user/register', {
        templateUrl: 'user/register.html',
        controller: 'registerCtrl'
      }).
      when('/user/:userId/update', {
        templateUrl: 'user/register.html',
        controller: 'updateCtrl'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);