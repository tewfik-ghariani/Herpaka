var app = angular.module('app');

app.controller('listproductCtrl', ['$scope', 'cacheService',
  function ($scope, cacheService) {

	$scope.adding = [];

  $scope.products = cacheService.allProducts().then(function(value) {

        $scope.products =  value;
        $scope.viewby = 20;
        $scope.totalItems = value.length;
        $scope.currentPage = 4;
        $scope.itemsPerPage = $scope.viewby;
        $scope.maxSize = 5; //Number of pager buttons to show

      });

  $scope.switchOn = function (index) {
  $scope.adding[index] = true;  };

 
  $scope.switchOff = function (prod,qte,index) {
    $scope.adding[index] = false;
    cacheService.addToCart(prod,qte);
  };


  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; //reset to first paghe
}
  }]);
