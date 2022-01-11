const express = require('express')


const friendsRouter = express.Router()

const friendController = require("../controllers/friends.controllers");
//const {getOneFriend} = require("../controllers/friends.controllers");*/


friendsRouter.post('/friends', friendController.postFriend)
friendsRouter.get('/friends', friendController.getFriends)
friendsRouter.get('/friends/:friendId', getOneFriend)

module.exports = friendsRouter
