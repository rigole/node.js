const express = require('express')

const app = express()
const PORT = 3000;

const friends = [
    {
        id: 1,
        name: "Mpodol Um Nyobe"
    },
    {
        id: 2,
        name: "Ernest Ouandie"
    }
]

app.get('/friends', (req, res) => {
    res.json(friends)
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello Albert</li></ul>' )
})

app.post('/messages', ((req, res) => {
    console.log("Updating Messages...")
}))

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})