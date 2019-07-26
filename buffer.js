// var b1 = new Buffer("My name is ");
// var b2 = new Buffer("java2s.com");
// var b3 = Buffer.concat([ b1, b2 ]);
// console.log(b3.toString('utf8'));
////////////////////////////
// global.something = 123; 
//////////////////////////////////////
// console.log(__dirname); 
// console.log(__filename); 
/////////////////////////////
// process.nextTick(function () {
//     console.log('next tick'); 
//  }); 
//  console.log('immediate'); 
//  console.log('after')
//////////////////////////////
// setTimeout(function () {
//     console.log('timeout completed'); 
// }, 1000); 
// setInterval(function () { 
//     console.log('second passed'); 
// }, 1000); 
require('colors'); 

var count = 0; 
var intervalObject = setInterval(function () { 
        count++; 
        console.log(count, 'seconds passed!'); 
        if (count == 3) { 
            console.log('exiting'); 
            clearInterval(intervalObject); 
        } 
    }, 3000); 
   