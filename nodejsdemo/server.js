const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./global_variable')(app, fs);

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});
//####################################################

// var events = require('events'); 
// //create an object of EventEmitter class by using above reference 
// var em = new events.EventEmitter(); 
// //Subscribe for FirstEvent 
// em.on('FirstEvent', function (data) { 
// console.log('First subscriber: ' + data);
// }); 
// // Raising FirstEvent 
// em.emit('FirstEvent', 'This is my first Node.js event ');

//######################################################
// var emitter = require('events').EventEmitter;

// var em = new emitter();

// //Subscribe FirstEvent
// em.addListener('FirstEvent', function (data) {
//     console.log('First subscriber: ' + data);
// });

// //Subscribe SecondEvent
// em.on('SecondEvent', function (data) {
//     console.log('First subscriber: ' + data);
// });

// // Raising FirstEvent
// em.emit('FirstEvent', 'This is my first Node.js event emitter example.');

// // Raising SecondEvent
// em.emit('SecondEvent', 'This is my second Node.js event emitter example.');


//###########################

// const express = require("express");

// const app = express();
// app.get('/users/add', (req, res) => { 

//     res.send('Hello Sagar Singh Rajput');
// }).listen(3000);