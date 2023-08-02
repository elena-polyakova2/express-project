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

//define routes
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
      error: "Friend does not exist"
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

