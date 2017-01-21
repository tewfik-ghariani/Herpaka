var app = angular.module('app');

app.controller('ModalDemoCtrl', [ 'cacheService', '$uibModal','$scope',
  function (cacheService, $uibModal,$scope) {
  	
  	var ctrl = this;
  	


  //  ctrl.panier = cacheService.getCart().then(function(value) {
    //  ctrl.panier = value;
      //console.log('hourray'+ctrl.panier);

    //});
 
    console.log(ctrl.panier);
                console.log('kk');

    //open modal

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