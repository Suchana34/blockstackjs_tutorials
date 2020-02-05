//The Blockstack Platform stores application data in the Gaia Storage System. Gaia storage is a key-value store.

//creating a file
var userSession = new UserSession();
let options = {
  encrypt: false
};
 userSession.putFile("/hello.txt", "hello world!", options)
 .then(() => {
    // /hello.txt exists now, and has the contents "hello world!".
 });

//creating an encrypted file
var userSession = new UserSession();

 let options = {
   encrypt: true
 };

 userSession.putFile("/message.txt", "Secret hello!", options)
 .then(() => {
    // message.txt exists now, and has the contents "hello world!".
 });

//reading a file
var userSession = new UserSession();

 let options = {
   decrypt: false
 };
 
 userSession.getFile("/hello.txt", options)
 .then((fileContents) => {
    // get the contents of the file /hello.txt
    assert(fileContents === "hello world!")
 });

 //reading an encrypted file - change decrypt key to true

//reading another's files
//As blockchain must be decetralised, transparent and p2p so one user can read another user's public information.
//In order for files to be publicly readable, the app must request the publish_data scope during authentication.

let options = {
    user: 'ryan.id', // the Blockstack ID of the user for which to lookup the file
    app: 'http://BlockstackApp.com' // origin of the app this file is stored for
  };
 
 var userSession = new UserSession()
 userSession.putFile("/hello.txt", "hello world!", options)
  .then((fileContents) => {
     // get the contents of the file /message.txt
     assert(fileContents === "hello world!");
  });

//deleting a file
var userSession = new UserSession();

 userSession.deleteFile("/hello.txt")
 .then(() => {
    // /hello.txt is now removed.
 });
