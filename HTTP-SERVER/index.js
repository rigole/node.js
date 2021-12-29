import { createRequire } from 'module';
const require = createRequire(import.meta.url);




const http = require("http");
//import { http } from "http";
const PORT = 3000;

const server = http.createServer((req, res) =>{
    res.writeHead(200, {
        'Content-Type': 'application/json',
    })
    res.end(JSON.stringify({
        id:1,
        name: 'Placide Rigole FOLEU'
    }))
})

server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}...`)
})