var app = angular.module('app');

app.controller('checkoutCtrl', ['$scope', 'cacheService', function($scope, cacheService) {

    var pan = cacheService.getCart();
    console.log('paniiiiiiiiiiiiiiiiier', pan)
    var infos = $scope.form;
    $scope.pay = function() {
        
    }
}]);
