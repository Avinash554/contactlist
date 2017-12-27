//importing Modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path'); //core module

var app = express(); //to use express we have to assign it to some variable

//routing var or let or const we can use
const route = require('./routes/route');

//connect to mongodb
mongoose.connect('localhost:27017/contactlist');

//on Connection successfully we have to say
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb @27017');
})
//Suppose if we have error in database connection
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log(' error in database ' + err);
    }
});
//port no
const port = 3000;

//adding middleware - cors
app.use(cors());

//adding Middleware - body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

//testing server
app.get('/', (req, res)=>{
    res.send('Avinash Sucees');
});

app.listen(port, ()=>{
    console.log(' Server Started at port: ' + port);
});
