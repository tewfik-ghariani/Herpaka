var app = angular.module('app');

app.controller('ModalInstanceCtrl', [ 'cacheService', '$uibModalInstance', '$rootScope', 
  function (cacheService, $uibModalInstance, $rootScope) {


  	var ctrl = this;

    
   ctrl.panier = cacheService.getCart();

ctrl.removeProduct = function(id) {
  ctrl.panier = cacheService.removeFromCart(id);
};


ctrl.empty = function() {
ctrl.panier = cacheService.reset();
};
  



  	ctrl.ok = function () {
    $uibModalInstance.close();
    $rootScope.switchTo('/pay');
  };


  ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);