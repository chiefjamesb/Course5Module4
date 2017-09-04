(function () {
'use strict';

angular.module('Data')
.component('catList', {
  templateUrl: 'src/categories-view.template.html',
  controller: CategoriesComponentController,
  bindings: {
    items: '<'
  }
});


CategoriesComponentController.$inject = ['$rootScope']
function CategoriesComponentController($rootScope) {
  var $ctrl = this;
  var cancels = [];

  $ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
    });
    cancels.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
    });
    cancels.push(cancel);
  };

};


})();
