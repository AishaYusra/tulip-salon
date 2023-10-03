const express = require('express'); // import express package
const http = require('http');    // to create a server for real-time connection
const morgan = require('morgan');
require('dotenv').config();      // importing the dot env file
const bodyParser = require('body-parser');
const cors = require('cors');
const WebSocket = require('ws');
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const jwt = require('jsonwebtoken');
const db = require("./config/db");


// const accountsRoutes = require('./routes/accountRoutes')
// const blogRoutes = require('./routes/blogsRoutes')
// const userRoutes = require('./routes/userRoutes')