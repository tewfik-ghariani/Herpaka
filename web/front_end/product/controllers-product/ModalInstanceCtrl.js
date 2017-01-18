var app = angular.module('app');

app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance','selectedProduct',
  function ($scope, $uibModalInstance, selectedProduct) {
  	var ctrl = this;
  	ctrl.id = selectedProduct.id;
  	console.log('okkeeeeeeeeeeeeeeeeeeeeeeeeeeey', ctrl.id)
  	    ctrl.msg = 'kljfdlqkdsj fjsqdkljflqksj dhflkjdshf';
  ctrl.items = ['item1', 'item2', 'item3'];
  	ctrl.ok = function () {
    $uibModalInstance.close(ctrl.selected.item);
  };

  ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);