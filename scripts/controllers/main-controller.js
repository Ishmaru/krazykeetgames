(function (){
  'use strict';

  angular
    .module('myApp')
    .controller('MainController', MainController);

    MainController.$inject = ['DataService'];

    function MainController(DataService) {
      var vm = this;
      vm.dataList = DataService.dataList;
    }

})();
