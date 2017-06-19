var myApp = angular.module('myApp', []);

myApp.controller('MessageBoard', function(){
  var vm = this;
  console.log('inside MessageBoard controller');


  vm.submitMessage = function(){
    console.log('inside submitMessage Function');
  };

}); //end controller
