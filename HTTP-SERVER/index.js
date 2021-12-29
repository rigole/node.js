import { createRequire } from 'module';
const require = createRequire(import.meta.url);




const http = require("http");
//import { http } from "http";
const PORT = 3000;

const server = http.createServer((req, res) =>{
    res.writeHead(200, {
        'Content-Type': 'text/plain',
    })
    res.end("Hello Placide FOLEU is billionaire")
})

server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}...`)
})