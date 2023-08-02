//import express package
const express = require('express');

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
app.post('/friends', (req, res) => {

  if (!req.body.name) {
    return res.status(400).json({ //respond with code 400 with specific error message and don't execute the least of code
      error: 'This Friend name does not exist'
    }); 
  }

  const newFriend = {
    id: friends.length,
    name: req.body.name
  }
  friends.push(newFriend);

  res.json(newFriend);
});

app.get('/friends', (req, res) => {
  //set to treat data as json
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId); //convert the string to number

  //validation
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    //return json as we use json already
    res.status(404).json({
      error: 'Friend does not exist'
    });
  }
});

app.get('/messages', (req, res) => {
  req.send('<ul><li>Hello friend!</li></ul>)')
}); 

app.post('/messages', (req, res) => {
  console.log('Updating messages...');
}); 

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

