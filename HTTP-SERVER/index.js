import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const http = require("http");
//import { http } from "http";
const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Placide FOLEU',
    },

    {
        id: 1,
        name: 'RIGOLE Billionaire',
    },
    {
    id: 2,
    name: 'RIGOLE Billionaire',
    }
]

const server = http.createServer((req, res) =>{
    const items = req.url.split('/')

    if (req.method === 'POST' && items[1] === 'friends'){
        req.on('data', (data) => {
            const friend = data.toString()
            console.log('Request:', friend)
            friends.push(JSON.parse(friend))

        })
        req.pipe(res)
    } else if ( req.method === 'GET' && items[1] === 'friends') {

        res.statusCode = 200;
        res.setHeader('Content-Type',  'application/json ')
        if (items.length === 3){
            const friendIndex = Number(items[2])
            res.end(JSON.stringify(friends[friendIndex]))
        }else{
            res.end(JSON.stringify(friends))
        }

    } else if (req.method === 'GET' && items[1] === 'messages'){
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