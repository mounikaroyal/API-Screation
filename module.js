// module.exports = function () {
//     console.log('a function in file myData'); 
//  }; 

// var path = require('path'); 

// var completePath = '/myData/myValue/bas.html'; 

// console.log(path.dirname(completePath)); 
// console.log(path.basename(completePath)); 
// console.log(path.extname(completePath)); 

// process.on('exit', function (code) {
//     console.log('Exiting with code:', code); 
// }); 

// process.exit(1); 

// var user = {
//     first_name: "HTML",
//     last_name: "CSS",
//     age: 32,
//     website: "java2s.com"
// };
// console.log(user.website,user.age)

// var EventEmitter = require('events').EventEmitter; 
// var emitter = new EventEmitter(); 

// emitter.on('foo', function a() { }); 
// emitter.on('foo', function b() { }); 
// emitter.on('hello', function c() { })

// console.log(emitter.listeners('hello')); // [ [Function: a], [Function: b] ] 
// console.log(emitter.listeners('foo'));

var EventEmitter = require('events').EventEmitter; 
var emitter = new EventEmitter(); 
/*w  w w .  j av  a2s.  co  m*/
// Listener addition / removal notifications 
emitter.on('removeListener', function (eventName, listenerFunction) {
     console.log(eventName, 'listener removed', listenerFunction.name); 
}); 
emitter.on('newListener', function (eventName, listenerFunction) {
     console.log(eventName, 'listener added', listenerFunction.name); 
}); 

function a() { } 
function b() { } 

// Add 
emitter.on('foo', a); 
emitter.on('foo', b); 

// Remove 
emitter.removeListener('foo', a); 
emitter.removeListener('foo', b); 