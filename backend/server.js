const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser');
const auth = require('./routes/auth');

// For socket.io
const http = require('http')
const server = http.createServer(app)
//const { Server } = require('socket.io')
//const io = new Server(server)
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"],
    }
})


const cors = require('cors')
//  cors is now allowed all routers, to enable it for a 
//  specific route, pass cors as a middleware function at route level.
app.use(cors)



app.use('/auth', auth);
// bodyParser allows us to access all the data in
// the req.body format.
//app.use(express.urlencoded());
app.use(express.json());
app.use(express.urlencoded({ extended: true  }))

app.get('/', (req, res) => {
    response.json({ info: 'Node.js, Express, and Postgres API'})
})


io.on('connection', (socket) => {
    console.log("a user connected")

    // For receiving a message
    socket.on('data', function(data){
        console.log(`data received ${data}`)
    })
})

server.listen(port, () => {
    console.log(`Listening on http:localhost:${port}`)
})

/*
app.listen(port, () => {
    console.log(`Example app listening at http:localhost:${port}`)
})
*/
