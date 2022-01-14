const express = require("express");
const path = require('path')

const app = express()

app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'views'))
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


app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())



app.get('/', (req, res) =>{
    res.render('index', {
        title: 'My Fellow Cameroonians love their country',
        caption:'Let\'s go to Cameroon',
    })
})
app.use('/friends', friendsRouter)
app.use('/messages', messageController)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})