var app= angular.module('app');

app.controller('categoriesCtrl', ['$scope', '$http',
  function ($scope, $http) {


$scope.categories = $http.get('/info').then(function(value){
  var resp = value.data;

    if(resp.success)
    {
        $scope.categories = resp.data;
    }

});




$scope.update = function(chosenCategory) {
  $scope.chosenCategory = chosenCategory;


$scope.products = $http({
    url: '/cat',
    method: "POST",
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    params: { lookingFor:chosenCategory}
  })
.then(function(value) {
    var resp = value.data;
  if (resp.success) 
  {
    $scope.products = resp.data;
  }
});

}
      

  }]);
