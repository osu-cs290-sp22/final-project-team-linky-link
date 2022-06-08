/*var http = require('http')
var fs = require('fs');
var port = process.env.PORT || 3000;

console.log("== loading Main Page")
var HTML_open = fs.readFileSync('index.html')
console.log("== loading JS")
var JS_open = fs.readFileSync('index.js')
console.log("== loading CSS")
var STYLE_open = fs.readFileSync('style.css')
console.log("== loading Images")
//var

var server = http.createServer(function(req, res) {
    console.log("== Requested")

    if ((req.url === '/index.html' ) || (req.url === '/')) {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(HTML_open)
    } else if (req.url === '/index.js') {
        res.writeHead(200, {
            "Content-Type": "application/javascript"
        })
        res.write(JS_open)
    } else if (req.url === '/style.css') {
        res.writeHead(200, {
            "Content-Type": "text/css"
        })
        res.write(STYLE_open)
    }
    
    res.end()
})

server.listen(port, function() {
    console.log("== Server is listening on port " + port)
})*/
// website server using express
const express = require('express');
const app = express();
const port = 3000;
//gathering alll files
app.use(express.static('public'))
app.use('/html',express.static(__dirname + 'public/html'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/png',express.static(__dirname + 'public/images/png'))
//setting req, res function to display main file
app.get('/', function(req,res){
    //serves the main file
    res.sendFile(__dirname + '/public/index.html')
});
//setting req,res function to display generated file
app.get('/public/:generated_pg',function(req,res){
    res.sendFile(__dirname + 'public/generated_pg')
})

//server listening
app.listen(port, () => console.info('listening on port' ,{port}));
