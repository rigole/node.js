const path = require('path')

function getMessages  (req, res) {

    //res.send('<ul><li>Hello UM Nyobe</li></ul>')
    res.sendFile(path.join(__dirname, '..', 'public', 'pp.jpg'))
}

function postMessages (req, res) {
    console.log("Updating Messages...")
}

module.exports = {
    getMessages,
    postMessages,
}