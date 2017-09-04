(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject=['$http']
function MenuDataService($http){
  var service=this;

  service.getAllCategories= function () {
      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      });

      console.log("Getallcategories called");
      console.log(response);
      return response;

    }

  service.getItemsForCategory = function(shortName) {
    console.log("Getitemsforcategories called");
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
        params: {
          category: shortName
        }


      });
    };
}

})();