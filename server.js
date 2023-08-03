//import built-in methods
const express = require('express');
const path = require('path');

//import
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

//set the app to use express function
const app = express();

const PORT = 3000;

//logging middleware
app.use((req, res, next) => {
  const start = Date.now();//get current time since January 1970
  next(); //call to receive response
  const delta = Date.now() - start; //amount in ms for request in node to be done
  console.log(`${req.method}  ${req.baseUrl}${req.url} ${delta}ms`); //keep track of requests
});

//use express static file middleware to use node in front end
app.use('/site', express.static(path.join(__dirname, 'public')));

//built in express middleware
app.use(express.json());

//tell the app to use the routers as middleware/ mounting on the app object
app.use('/friends', friendsRouter);

app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

