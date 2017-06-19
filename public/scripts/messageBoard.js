var myApp = angular.module('myApp', []);

myApp.controller('MessageBoard', function(MessageService){
  var vm = this;
  console.log('inside MessageBoard controller');

  vm.getMessages = function() {
  console.log('in getMessages');
  MessageService.getMessages().then(function() {
    console.log('back in controller:', MessageService.allMessages);
    vm.theMessages = MessageService.allMessages.data;
    console.log(vm.theMessages);
  });
}; //end whereMyPeepsAt

//submit message
  vm.submitMessage = function(){
    console.log('inside submitMessage Function');
    var messageToAdd = {
      name: vm.name,
      message: vm.message
    }; //end messageToAdd
    console.log('messageToAdd', messageToAdd);
    MessageService.sendMessage(messageToAdd);
    vm.getMessages();
  }; //end submitMessage

}); //end controller
