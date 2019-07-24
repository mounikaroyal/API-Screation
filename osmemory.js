////////to check os info////
// var os = require('os'); 
// var gigaByte = 1 / (Math.pow(1024, 3)); 
// console.log('Total Memory', os.totalmem() * gigaByte, 'GBs'); 
// console.log('Available Memory', os.freemem() * gigaByte, 'GBs'); 
// console.log('Percent consumed', 100 * (1 - os.freemem() / os.totalmem())); 


///////////////to check cpu info//////
// var os = require('os'); 
// console.log('This machine has', os.cpus().length, 'CPUs'); 

////////////////to check date will use util.log////
// var util = require('util'); 
// util.log('sample message'); 
//////////////////////// %s will use for strings %d will use for numbers
var util = require('util'); 
var name = 'CSS'; 
var a = 38; 

console.log(util.format('%s has %d attributes', name, a)); 