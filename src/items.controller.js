(function() {
  'use strict';

  angular.module('Data')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var catDetail = this;
    catDetail.menuItems = items.data.menu_items;
    catDetail.name = items.data.category.name;
    
    };

})();