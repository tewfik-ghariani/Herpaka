var app= angular.module('app');

app.controller('mainCtrl', ['$scope', '$http',
  function ($scope, $http) {


$scope.products = $http.get('/top').then (function(value) {
		var resp = value.data;

	if (resp.success) 
	{
		$scope.products = resp.data;
	}
});


  		

  }]);
