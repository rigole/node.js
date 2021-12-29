import { createRequire } from 'module';
const require = createRequire(import.meta.url);




const http = require("http");
//import { http } from "http";
const PORT = 3000;

const server = http.createServer((req, res) =>{
        if (req.url === '/friends') {
           // res.writeHead(200, {
          //      'Content-Type': 'application/json',
          //  })
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json ')
            res.end(JSON.stringify({
                id:1,
                name: 'Placide Rigole FOLEU'
            }))
         } else if (req.url === '/messages'){
            res.setHeader('Content-Type', 'text/html')
            res.write("<html lang='en'>")
            res.write("<body>")
            res.write("<ul>")
            res.write("<li>Hello Placide</li>")
            res.write("<li>What are your thoughts on Artificial Intelligence?</li>")
            res.write("</ul>")
            res.write("</body>")
            res.write("</html>")
            res.end()
        } else {
            res.statusCode = 404
            res.end()
        }
})

server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}...`)
})