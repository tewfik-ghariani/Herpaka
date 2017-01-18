var app = angular.module('app');

app.controller('ModalDemoCtrl', [ '$uibModal','$scope',
  function ($uibModal,$scope) {
  	
  	var ctrl = this;
  	ctrl.hello = function() {
      console.log("hellllllllllllllllllllllllllllllllllllllll")
    }
    //open modal

    ctrl.open = function(id) {
      console.log('hourrrrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaay', $scope.msg )
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
          selectedProduct: function () {
          return selectedProduct;
          }
        }
      });
      /*modalInstance.result.then(function (selectedItem) {
        ctrl.selected = selectedItem;
      }*/
      modalInstance.result.then(function () {
        return selectedProduct;
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };

}]);