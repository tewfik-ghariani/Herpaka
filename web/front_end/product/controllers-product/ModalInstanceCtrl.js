var app = angular.module('app');

app.controller('ModalInstanceCtrl', ['$rootScope', 'cacheService', '$uibModalInstance', 
  function ($rootScope, cacheService, $uibModalInstance) {


  	var ctrl = this;

    
   ctrl.panier = cacheService.getCart();

ctrl.removeProduct = function(id) {
  ctrl.panier = cacheService.removeFromCart(id);
};

  

  	ctrl.ok = function () {
    $uibModalInstance.close();
    $rootScope.switchTo('/pay');
  };

  ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);