// module.exports = function () {
//     console.log('a function in file myData'); 
//  }; 

var path = require('path'); 

var completePath = '/myData/myValue/bas.html'; 

console.log(path.dirname(completePath)); 
console.log(path.basename(completePath)); 
console.log(path.extname(completePath)); 