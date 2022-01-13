const express = require("express");


const app = express()
const PORT = 3000;

const friendsRouter =  require('./routes/friends.router')
const messageController = require("./routes/messages.router");

app.use(express.json())


app.use((req, res, next) =>{
    const start = Date.now();
    console.log(`${req.method} ${req.url}`)
    next()
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.static('public'))
app.use(express.json())




app.use('/friends', friendsRouter)
app.use('/messages', messageController)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})