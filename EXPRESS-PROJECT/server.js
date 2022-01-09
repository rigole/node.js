const express = require('express')
const messageController = require('./controllers/messages.controllers')
const friendController = require('./controllers/friends.controllers')
const {getOneFriend} = require("./controllers/friends.controllers");

const app = express()
const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Mpodol Um Nyobe"
    },
    {
        id: 1,
        name: "Ernest Ouandie"
    },
    {
        id: 2,
        name: "Rudoplh Douala Manga Bell"
    }
];

app.use((req, res, next) =>{
    const start = Date.now();
    console.log(`${req.method} ${req.url}`)
    next()
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.json())

app.post('/friends', friendController.postFriend)

app.get('/friends', friendController.getFriends)

app.get('/friends/:friendId', getOneFriend)

app.get('/messages',  messageController.getMessages )
app.post('/messages', messageController.postMessages)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})