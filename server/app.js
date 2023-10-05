const express = require('express'); // import express package
const http = require('http');    // to create a server for real-time connection
const morgan = require('morgan');
require('dotenv').config();      // importing the dot env file
const bodyParser = require('body-parser');
const cors = require('cors');
const WebSocket = require('ws');
// const bcrypt = require("bcrypt");
// const uuid = require("uuid");
// const jwt = require('jsonwebtoken');
// const db = require("./config/db");
// const JWT_SECRET = process.env.JWT_SECRET;
// const validator = require('validator')

const accountsRoutes = require('./routes/accountroutes')
// const blogRoutes = require('./routes/blogsRoutes')
// const userRoutes = require('./routes/userRoutes')



const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://127.0.0.1:5500"],
    credentials: true
}));
app.use('/accounts', accountsRoutes)

const server = http.createServer(app)   // to create out http server and pass our express server into it.

const wss = new WebSocket.Server({ server });    // create the web socket server


// Create a Web Socket Server connection
wss.on('connection', (ws) => {
    console.log('Connection Established')

    // handle incoming WebSocket messages
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send(`${message}`)
    });

    // handle WebSocket disconnection
    ws.on('close', () => {
        console.log(`WebSocket disconnected:`);
    });
});

// app.listen(PORT, () => {
//     console.log(`Listening on PORT ${PORT}`)
// })

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})