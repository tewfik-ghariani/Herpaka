var app = angular.module('app');

app.controller('listproductCtrl', ['$scope', 'cacheService','$filter', '$rootScope',
  function ($scope, cacheService,$filter,$rootScope) {

	$scope.adding = [];

  $scope.allproducts = cacheService.allProducts().then(function(value) {
        
        
        $scope.allproducts=value;
        if (Array.isArray($scope.allproducts)){
        $scope.products = $filter('filter')($scope.allproducts, $scope.lookingFor);
            $scope.totalItems = $scope.products.length;}
        $scope.viewby = 20;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.maxSize = 5; //Number of pager buttons to show
        
      });

        $rootScope.$watch('lookingFor', function() {
        
          //check if array to avoid using these methods/attributs on undefined 
        if (Array.isArray($scope.allproducts)){
        $scope.products = $filter('filter')($scope.allproducts, $rootScope.lookingFor);
        $scope.totalItems = $scope.products.length;}

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
};
  }]);
