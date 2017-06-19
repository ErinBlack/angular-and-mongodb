myApp.service('MessageService', function($http){
  var sv = this;


  //submitMessage
  sv.sendMessage = function(newMessage){
    console.log('in submitMessage');
    console.log('newMessage data', newMessage);
    return $http({
      method: 'POST',
      url: '/messages',
      data: newMessage
    });
  }; //end submitMessage


}); //end MessageService
