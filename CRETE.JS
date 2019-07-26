// var http = require('http');
// // w  w w.j  a  va  2  s.  c om
// function  handle_incoming_request (req, res) {
//     console.log("INCOMING REQUEST: " + req.method + " " + req.url);
//     res.writeHead(200, { "Content-Type" : "application/json" });
//     res.end(JSON.stringify( { error: null }) + "\n");
// }

// var s = http.createServer(handle_incoming_request);
// s.listen(8080);
// var argv = require('optimist').argv; 
// delete argv['$0']; 
// console.log(argv); 

// var moment = require('moment'); 

// // From date to moment 
// var wrapped = moment(new Date()); 
// console.log(wrapped); 

// // From moment to date 
// var date = wrapped.toDate(); 
// console.log(date); 

var moment = require('moment'); 
/*from   ww w  . j  ava  2 s . com*/
var date = new Date(2010, 1, 14, 15, 25, 50); 
var wrapped = moment(date); 

// "Sunday, February 14th 2010, 3:25:50 pm" 
console.log(wrapped.format('"dddd, MMMM Do YYYY, h:mm:ss a"')); 

// "Sun, 3PM" 
console.log(wrapped.format("ddd, hA")); 

var a = moment([2007, 0, 15]); // 15 Jan 2007 
var b = moment([2007, 0, 16]); // 16 Jan 2007 
var c = moment([2007, 1, 15]); // 15 Feb 2007 
var d = moment([2008, 0, 15]); // 15 Jan 2008 

console.log(a.from(b)); // "a day ago" 
console.log(a.from(c)); // "a month ago" 
console.log(a.from(d)); // "a year ago" 

console.log(b.from(a)); // "in a day" 
console.log(c.from(a)); // "in a month" 
console.log(d.from(a)); // "in a year" 