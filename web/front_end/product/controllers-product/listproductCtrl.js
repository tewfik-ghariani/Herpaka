var app = angular.module('app');

app.controller('listproductCtrl', ['$scope', 'cacheService',
  function ($scope, cacheService) {


  $scope.products = cacheService.allProducts().then(function(value) {
        $scope.products =  value;
      });



$scope.cartAdd = function (id) {

console.log('Added!');
//ToDo use ngFlash

cacheService.addToCart(id);
};
  }]);
