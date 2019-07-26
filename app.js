// Add something to global 
// require('./buffer'); 
// console.log(something); // 123 
/////////////////////////////////////////////to check date
// var date = new Date(Date.UTC(2020, 0, 1)); 
// console.log('Original', date); 
// // To JSON 
// var jsonString = date.toJSON(); 
// console.log(jsonString); // 2020-01-01T00:00:00.000Z 
// // From JSON 
// console.log('Round Tripped',new Date(jsonString)); 

/////////////////////to print colors////////////////
// require('colors'); 
// console.log('This should cheer you up!'.rainbow);
/////////////////////////emitter///////
var EventEmitter = require('events').EventEmitter; 
var emitter = new EventEmitter(); 
//from   w w  w .j  ava2 s .c o m
emitter.on('foo', function () {
    console.log('subscriber 1'); 
}); 
emitter.on('foo', function () {
    console.log('subscriber 2'); 
}); 

// Emit 
emitter.emit('foo'); 
