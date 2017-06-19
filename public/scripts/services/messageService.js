myApp.service('MessageService', function($http){
  var sv = this;


  //submitMessage
  sv.sendMessage = function(newMessage){
    console.log('in submitMessage');
    console.log('newMessage data', newMessage);
    return $http({
      method: 'POST',
      url: '/message',
      data: newMessage
    });
  }; //end submitMessage


  //getMessages

  sv.getMessages = function() {
  console.log('in getMessages');
  return $http({
    method: 'GET',
    url: '/message',
  }).then(function(response) {
    sv.allMessages = response;
  });
};


}); //end MessageService
