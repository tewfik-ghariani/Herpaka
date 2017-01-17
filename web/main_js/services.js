var app = angular.module('app');



// the service that retrieves some movie title from an url
app.factory('MovieRetriever', function($http, $q, $timeout){
  var MovieRetriever = new Object();

  MovieRetriever.getmovies = function(i) {
    var moviedata = $q.defer();
    var movies;

    var someMovies = ["The Wolverine", "The Smurfs 2", "The Mortal Instruments: City of Bones", "Drinking Buddies", "All the Boys Love Mandy Lane", "The Act Of Killing", "Red 2", "Jobs", "Getaway", "Red Obsession", "2 Guns", "The World's End", "Planes", "Paranoia", "The To Do List", "Man of Steel"];

    var moreMovies = ["The Wolverine", "The Smurfs 2", "The Mortal Instruments: City of Bones", "Drinking Buddies", "All the Boys Love Mandy Lane", "The Act Of Killing", "Red 2", "Jobs", "Getaway", "Red Obsession", "2 Guns", "The World's End", "Planes", "Paranoia", "The To Do List", "Man of Steel", "The Way Way Back", "Before Midnight", "Only God Forgives", "I Give It a Year", "The Heat", "Pacific Rim", "Pacific Rim", "Kevin Hart: Let Me Explain", "A Hijacking", "Maniac", "After Earth", "The Purge", "Much Ado About Nothing", "Europa Report", "Stuck in Love", "We Steal Secrets: The Story Of Wikileaks", "The Croods", "This Is the End", "The Frozen Ground", "Turbo", "Blackfish", "Frances Ha", "Prince Avalanche", "The Attack", "Grown Ups 2", "White House Down", "Lovelace", "Girl Most Likely", "Parkland", "Passion", "Monsters University", "R.I.P.D.", "Byzantium", "The Conjuring", "The Internship"]

    if(i && i.indexOf('T')!=-1)
      movies=moreMovies;
    else
      movies=moreMovies;

    $timeout(function(){
      moviedata.resolve(movies);
    },1000);

    return moviedata.promise
  }

  return MovieRetriever;
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

app.service('productService', ['CacheFactory','providerFactory', function (CacheFactory,providerFactory) {
  var productCache;
    var temp ;

  // Check to make sure the cache doesn't already exist
  if (!CacheFactory.get('productCache')) {
  productCache = CacheFactory.createCache('productCache', {
  deleteOnExpire: 'aggressive',
  recycleFreq: 60000
  });

        
productCache.put('show', {
    name: 'John',
    skills: ['programming', 'piano']
});


    providerFactory.fetchProducts().then(function(response){
      response = response.data;
      console.log(response);
            // if (response.success) [ Or handle promises ] 
productCache.put('show2', response.data)

             });





  }



 var productCache = CacheFactory.get('productCache');
 var products= productCache.get('show2');
 return {
      allProducts: function () {
        console.log(products);
        return products;
      }
  }
}]);


/*app.service('productService', ['CacheFactory','providerFactory', function (CacheFactory,providerFactory) {
  var productCache;

  // Check to make sure the cache doesn't already exist
  if (!CacheFactory.get('productCache')) {
      
               productCache = CacheFactory.createCache('productCache', {
        //maxagge
        maxAge: 5 * 60 * 1000, // 5 minutes to have products reloaded
        deleteOnExpire: 'aggressive',
        onExpire: function (key, value) {

     
          providerFactory.fetchProducts().then(function(response){

            if (response.success) {
              productCache.put(response.data);
            }
     
            else 
            {
            //handle exceptions
            }
          });

        }
      });
        var temp =  providerFactory.fetchProducts().then(function(response){

            if (response.success) {
              console.log(response.data);
temp = response.data
            } });
CacheFactory('productCache').put(temp);



  }

var productCache = CacheFactory.get('productCache');

 return {
      allProducts: function () {
        console.log(productCache);
        return productCache;
      }
  };
  
}]);
*/
