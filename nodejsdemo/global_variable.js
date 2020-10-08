
// console.log(__dirname);
// console.log(__filename);

//  //console.log('Name---->', main.name);

// //  const http = require('http')

// // //  const server = http.createServer(function(req, res){
// // //      res.writeHead(200, {"content-type" : "text/html"})
// // //      res.write('<h1>Hello Welcome to Nodejs<h1>');
// // // res.end();
// // //  }).listen(3000, ()=> console.log('Server Runing on 3000'));

// // const fs = require('fs');
// // const server = http.createServer(function(req, res){
// //  fs.readFile(__dirname+"/html.txt", "utf8", (err, data)=> {
// // //     if(err) throw err;
// // //     console.log('Data--:', data);
// // // });
// // res.writeHead(200, {"content-type" : "text/html"})
// // res.write(data);
// // res.end();
// //  });
// // }).listen(3000, ()=> console.log('Server Runing on 3000'));

// // // fs.unlink(__dirname+"/html.txt",(err, data)=>{
// // //     if(err) throw err;
// // //     console.log('Data !--->', data);
// // // });
// //###########################################################################################################
// var http = require('http'); // Import Node.js core module

// var server = http.createServer(function (req, res) {   //create web server
//     // if (req.url == '/') { //check the URL of the current request
        
//     //     // set response header
//     //     res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
//     //     // set response content    
//     //     res.write('<html><body><p>This is home Page.</p></body></html>');
//     //     res.end();
    
//     // }
//     // else if (req.url == "/student") {
        
//     //     res.writeHead(200, { 'Content-Type': 'text/html' });
//     //     res.write('<html><body><p>This is student Page.</p></body></html>');
//     //     res.end();
    
//     // }
//     // else if (req.url == "/admin") {
        
//     //     res.writeHead(200, { 'Content-Type': 'text/html' });
//     //     res.write('<html><body><p>This is admin Page.</p></body></html>');
//     //     res.end();
    
//     // }
//     if (req.url == '/data') { //check the URL of the current request
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify({ message: "Hello World"}));  
//         res.end();  
//     }   
//     else
//         res.end('Invalid Request!');

// });

// server.listen(3000); //6 - listen for any incoming requests

// console.log('Node.js web server at port 3000 is running..')


// import other routes
const userRoutes = require('./user');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;