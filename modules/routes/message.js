//require
var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );

//use
router.use( bodyParser.urlencoded( { extended: true } ) );
router.use( bodyParser.json() );

mongoose.connect( 'localhost:27017/messageboard' );

var messageSchema = new  mongoose.Schema({
  name: String,
  message: String
});

var messageModel = mongoose.model( 'messageModel', messageSchema );

//get all messageSchema
router.get( '/', function( req, res ){
  // get and send back all the things
  messageModel.find().then( function( data ){
  res.send( data );
  });
}); //end router.get


//post to messageboard
router.post( '/', function( req, res ){
  console.log('inside message router.post');
  console.log('req.body', req.body.message);
  // retrieved the req.body
  // putting it into an object to be saved in the db
  var messageToAdd={
    name:req.body.name,
    message:req.body.message
  };
  // create new record
  var newMessage=messageModel( messageToAdd );
  newMessage.save();
   res.send( 'good times' );
}); //end post




module.exports = router;
