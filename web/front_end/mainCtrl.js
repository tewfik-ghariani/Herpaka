var app= angular.module('app');

app.controller('mainCtrl', ['$scope', 'cacheService',
  function ($scope, cacheService) {


  $scope.products = cacheService.allProducts().then(function(value) {
        $scope.products =  value;
        
      });

  		 $scope.numberShownProducts = 12;

  }]);
