// var app = require('./app');
// var path = require('path');
// const os = require('os');
// const fs = require('fs');


// console.log(path.parse(__dirname));
// console.log(path.parse(__filename));

// app();


// console.log(os.totalmem());





// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.addListener('error', function(){
//     console.log("Error occured in the application");
// })

// emitter.on('error', function(){
//     console.log("Error occured in the application");
// })

// emitter.on('error', function(args){
//     console.log("Error occured in the application", args);
//     console.log("Error occured in the application" + args);
//     console.log(`Error occured in the application ${args}`);

// })

// emitter.emit('error');
// emitter.emit('error', {name: 'Harsh', website_url: 'https://www.google.com/'});


const http = require('http');
// const server = http.createServer();

const server = http.createServer( function(req, res){
    if(req.url == '/' || req.url == '/home') {
        res.write('This is home page');
        res.end();//show the use without this
    }
    else if(req.url == '/about' ) {
        res.write('This is about page');
        res.end();//show the use without this
    }
});


server.listen(3000);
console.log('Listening on port 3000');

// server.on('connection', () => 
// console.log('Incoming request or the url is hit'));


// http.createServer( (req, response) => {
    
// });

