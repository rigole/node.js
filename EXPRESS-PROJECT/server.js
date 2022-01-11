const express = require("express");


const app = express()
const PORT = 3000;

const friendsRouter =  require('./routes/friends.router')
const messageController = require("./controllers/messages.controllers");


//const {getOneFriend} = require("./controllers/friends.controllers");*/



app.use(express.json())


app.get('/messages',  messageController.getMessages )
app.post('/messages', messageController.postMessages)

app.use((req, res, next) =>{
    const start = Date.now();
    console.log(`${req.method} ${req.url}`)
    next()
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.json())




app.use('/friends', friendsRouter)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})