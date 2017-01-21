var app = angular.module('app');

app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance','panier', 
  function ($scope, $uibModalInstance, panier) {







  	var ctrl = this;


ctrl.panier = panier;
console.log("hereeee",ctrl.panier);

  

  ctrl.items = ['item1', 'item2', 'item3'];
  	ctrl.ok = function () {
    $uibModalInstance.close(ctrl.selected.item);
  };

  ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);