var app = angular.module('app');



// the service that retrieves some product title from an url
app.factory('ProductRetriever', function($http, $q, $timeout){
  var ProductRetriever = new Object();

  ProductRetriever.getproducts = function(i, smv, mmv) {
    var productdata = $q.defer();
    var products;

    var someProducts = smv;
    var moreProducts = mmv;
    if(i && i.indexOf('T')!=-1)
      products=moreProducts;
    else
      products=moreProducts;

    $timeout(function(){
      productdata.resolve(products);
    },1000);

    return productdata.promise
  }

  return ProductRetriever;
});

// service to fetch products from the database
app.factory('providerFactory', ['$http', function($http) { 

    return {
            fetchProducts : function () {
              return $http({
                method: 'GET',
                url: "/list"
              })
            },

          }
}]);

app.factory('productFactory', ['$http', function($http) { 

    return {
            orderProducts : function () {
              return $http({
                method: 'POST',
                url: "/order"
              })
            },

          }
}]);
