function shape() { }; 
shape.prototype.myValue = 123; 

var bas = new shape(); 
var myItem = new shape(); 

console.log(bas.myValue); 
console.log(myItem.myValue);

shape.prototype.myValue = 456; 

console.log(bas.myValue); // 456 
console.log(myItem.myValue); // 456 
