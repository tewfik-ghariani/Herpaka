var app = angular.module('app');

app.controller('ModalDemoCtrl', [  '$uibModal','$scope',
  function ( $uibModal,$scope) {
  	
  	var ctrl = this;

    ctrl.open = function(id) {

      var selectedProduct = {
        'id': id
      };
      var modalInstance = $uibModal.open({
        animation: true,
        size: 'md',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'ctrl',
        resolve: {
          /*items: function () {
            return ctrl.items;
          }*/

          panier: function () {
          return ctrl.panier;
          }
        }
      });

      modalInstance.result.then(function () {
        return ctrl.panier;
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };

}]);