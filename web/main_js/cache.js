var app = angular.module('app');




//service to preserve the products in the cache

app.service('cacheService', ['CacheFactory','providerFactory', '$q','$timeout', function (CacheFactory,providerFactory,$q,$timeout) {

 var self = this;

 var productCache = CacheFactory.get('productCache');
    
 var defer = $q.defer();


  // Check to make sure the cache doesn't already exist
  if (!productCache) {
  productCache = CacheFactory.createCache('productCache', {
  maxAge:  5 *60 * 1000,
  deleteOnExpire: 'aggressive',
  recycleFreq: 60000,
  onExpire: function (key,value) {

    providerFactory.fetchProducts().then(function(response){
   
      response = response.data;
       if (response.success){
       defer.resolve(response.data);
        productCache.put('show', defer.promise); }
             });
  }
  });
    providerFactory.fetchProducts().then(function(response){
      response = response.data;
       if (response.success){
       defer.resolve(response.data); }
             });
  }
  else {
    defer.resolve(productCache.get('show'));
  }

 productCache.put('show', defer.promise);



// cache for panier!!

var cartCache = CacheFactory.get('cartCache');


 if (!cartCache) {
  cartCache = CacheFactory.createCache('cartCache', {
storageMode: "localStorage"

  });}



self.getCart = function () {
var key = cartCache.keys();
var toBuy = [];

	for (i=0; i<cartCache.info().size; i++){

		toBuy.push(cartCache.get(key[i]));
	}

return toBuy;       
 };




self.addToCart = function (prod) {
console.log('prod     ______________ '+ prod);
cartCache.put(prod.id, prod);

};


self.removeFromCart = function(id) {

cartCache.remove(id);

return self.getCart();

}




 var products = productCache.get('show');

 self.allProducts = function() 
 	 { return products;   };





 return self;
}]);

