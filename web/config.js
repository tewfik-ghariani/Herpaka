var routesModule = angular.module('routesModule', ['ngRoute']);

routesModule.config(['$routeProvider',
  function($routeProvider) {

  
      $routeProvider.
      when('/home', {
        templateUrl: Routing.generate('rou_dispacher',{template:"Prodcut:base.html"}),
        controller: 'mainCtrl'
      }).
      when('/show', {
        templateUrl: Routing.generate('rou_dispacher',{template:"listproduct.html"}),
        controller: 'listproductCtrl'
      }).
      when('/products/:productId', {
        templateUrl: Routing.generate('rou_dispacher',{template:"singleproduct.html"}),
        controller: 'singleproductCtrl'
      }).
      when('/:userId/cart', {
        templateUrl: Routing.generate('rou_dispacher',{template:"cart.html"}),
        controller: 'cartCtrl'
      }).
      when('/:userId/checkout', {
        templateUrl: Routing.generate('rou_dispacher',{template:"checkout.html"}),
        controller: 'checkoutCtrl'
      }).
      when('/login', {
        templateUrl: Routing.generate('rou_dispacher',{template:"login.html"}),
        controller: 'loginCtrl'
      }).
      when('/register', {
        templateUrl: Routing.generate('rou_dispacher',{template:"register.html"}),
        controller: 'registerCtrl'
      }).
      when('/:userId/update', {
        templateUrl: Routing.generate('rou_dispacher',{template:"update.html"}),
        controller: 'updateCtrl'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);