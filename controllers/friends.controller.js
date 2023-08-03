const model = require('../models/friends.model');

function postFriend (req, res) {

  if (!req.body.name) {
    return res.status(400).json({ //respond with code 400 with specific error message and don't execute the least of code
      error: 'This Friend name does not exist'
    }); 
  }

  const newFriend = {
    id: model.length,
    name: req.body.name
  }
  model.push(newFriend);

  res.json(newFriend);
}

function getFriends (req, res) {
  //set to treat data as json
  res.json(model);
}

function getFriend (req, res) {
  const friendId = Number(req.params.friendId); //convert the string to number

  //validation
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    //return json as we use json already
    res.status(404).json({
      error: 'Friend does not exist'
    });
  }
}

//export functions
module.exports = {
  postFriend,
  getFriends,
  getFriend,
}