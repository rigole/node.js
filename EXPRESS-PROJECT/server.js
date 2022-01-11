const express = require('express')
const messageController = require('./controllers/messages.controllers')
const friendController = require('./controllers/friends.controllers')
const {getOneFriend} = require("./controllers/friends.controllers");

const app = express()
const PORT = 3000;



app.use((req, res, next) =>{
    const start = Date.now();
    console.log(`${req.method} ${req.url}`)
    next()
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.json())

const friendsRouter = express.Router()


friendsRouter.post('/friends', friendController.postFriend)
friendsRouter.get('/friends', friendController.getFriends)
friendsRouter.get('/friends/:friendId', getOneFriend)

app.use('/friends', friendsRouter)

app.get('/messages',  messageController.getMessages )
app.post('/messages', messageController.postMessages)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})