const express = require('express')


const friendsRouter = express.Router()

const friendController = require("../controllers/friends.controllers");
//const {getOneFriend} = require("../controllers/friends.controllers");*/


friendsRouter.use((req, res, next) =>{
    console.log('ip address:', req.ip);
    next()
});
friendsRouter.post('/', friendController.postFriend)
friendsRouter.get('/', friendController.getFriends)
//friendsRouter.get('/friends/:friendId', getOneFriend)

module.exports = friendsRouter
