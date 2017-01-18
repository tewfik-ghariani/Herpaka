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

//service to preserve the products in the cache

app.service('cacheService', ['CacheFactory','providerFactory', '$q', function (CacheFactory,providerFactory,$q) {
 var productCache = CacheFactory.get('productCache');
    
       var defer = $q.defer();


  // Check to make sure the cache doesn't already exist
  if (!CacheFactory.get('productCache')) {
  productCache = CacheFactory.createCache('productCache', {
  maxAge:  5 *60 * 1000,
  deleteOnExpire: 'aggressive',
  recycleFreq: 60000,
  onExpire: function (key,value) {

    providerFactory.fetchProducts().then(function(response){
   
      response = response.data;
       if (response.success){
       defer.resolve(response.data);
        productCache.put('show', defer.promise);
                          }
             });


  }


  });

    providerFactory.fetchProducts().then(function(response){
   
      response = response.data;
       if (response.success){
       defer.resolve(response.data);
                          }
             });

  }



  else {

    defer.resolve(productCache.get('show'));


  }



 productCache.put('show', defer.promise);


 var products = productCache.get('show');
 return {
      allProducts: function () {
        
        return products;
      }

  }
}]);

