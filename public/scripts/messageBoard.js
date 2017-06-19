var myApp = angular.module('myApp', []);

myApp.controller('MessageBoard', function(MessageService){
  var vm = this;
  console.log('inside MessageBoard controller');

//   vm.getMessages = function() {
//   console.log('in getMessages');
//   MessageService.getmessages().then(function() {
//     console.log('back in controller:', MessageService.allMyPeeps);
//     vm.thePeeps = PeepsService.allMyPeeps.data;
//     console.log(vm.thePeeps);
//   });
// }; //end whereMyPeepsAt

//submit message
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
