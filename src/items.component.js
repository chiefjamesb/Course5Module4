(function () {
'use strict';

angular.module('Data')
.component('itemsList', {
  templateUrl: 'src/item-view.template.html',
  bindings: {
    items: '<',

  }
});


})();
