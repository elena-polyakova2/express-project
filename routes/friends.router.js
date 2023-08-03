//import express
const express = require('express');

const friendsController = require('../controllers/friends.controller');

//create a router
const friendsRouter = express.Router();

//custom middleware
friendsRouter.use((req, res, next) => {
  console.log('ip address:', req.ip); //show ip address of the user on console
  next();
});

//define routes
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;