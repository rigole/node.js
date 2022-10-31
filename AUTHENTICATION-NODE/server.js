const fs = require('fs')
const path = require('path')
const https = require('https')
const helmet = require('helmet')
const express = require("express")
const passport = require("passport")
const { Strategy } = require("passport-google-oauth20")
const PORT = 3000;

passport.use()
const app = express();

require('dotenv').config();
app.use(helmet())

app.use(passport.initialize())

const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET
}

const AUTH_OPTIONS = {
    callbackURL: "/auth/google/callback",
    clientId: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
}
function verifyCallback(accessToken, refreshToken, profile, done){
    console.log("Google profile", profile);
    done(null, profile)
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

function checkLoggedIn (req, res, next) {
    const isLoggedIn = true;
    if(isLoggedIn) {
        return res.status(401).json({
            error: "You must log in!"
        });
    }
    next();
}

app.get('/auth/google',(req, res) => {})
app.get('/auth/google/callback', (req, res) => {})
app.get('/auth/logout', (req, res) => {})

app.get('/secret',checkLoggedIn, (req, res) => {
    return res.send("Your personal secret value is 14");
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


https.createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
}, app).listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})


/*app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})*/