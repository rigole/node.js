const express = require("express");
const messageController = require('../controllers/messages.controllers')


const messagesRouter = express.Router()

messagesRouter.get('/',  messageController.getMessages )
messagesRouter.post('/', messageController.postMessages)

module.exports = messagesRouter