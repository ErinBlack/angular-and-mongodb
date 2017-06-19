var myApp = angular.module('myApp', []);

myApp.controller('MessageBoard', function(MessageService){
  var vm = this;
  console.log('inside MessageBoard controller');


  vm.submitMessage = function(){
    console.log('inside submitMessage Function');
    var messageToAdd = {
      name: vm.name,
      message: vm.message
    }; //end messageToAdd
    console.log('messageToAdd', messageToAdd);
    MessageService.sendMessage(messageToAdd);


  }; //end submitMessage

}); //end controller
