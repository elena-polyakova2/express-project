//import express package
const express = require('express');

//import
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

//set the app to use express function
const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Albert Einstein'
  },
  {
    id: 1,
    name: 'Sir Isaac Newton'
  }
];

//logging middleware
app.use((req, res, next) => {
  const start = Date.now();//get current time since January 1970
  next(); //call to receive response
  const delta = Date.now() - start; //amount in ms for request in node to be done
  console.log(`${req.method} ${req.url} ${delta}ms`); //keep track of requests
});

//built in express middleware
app.use(express.json());

//define routes
app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages); 
app.post('/messages', messagesController.postMessage); 

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

