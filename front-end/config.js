HerpakaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'product/product.html',
        controller: 'PhoneListCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);