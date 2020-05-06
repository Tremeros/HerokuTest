const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');


const app = express();

connectDB();


// app.use(express.json({extended: false}));
app.use(morgan('combined'));

app.use(bodyParser.json({ type: '*/*'}));


app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/contact', require('./routes/api/contact'));




const PORT = process.env.PORT || 5000;
const server = http.createServer(app);


server.listen(PORT, () => console.log(`Server started on port ${PORT}`));