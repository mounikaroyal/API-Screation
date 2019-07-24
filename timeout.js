// setTimeout(function () { 
//     try { 
//         console.log('About to throw an error'); 
//         throw new Error('Error thrown'); 
//     } catch (e) { 
//         console.log('Error caught!'); 
//     } 
// }, 5000); 
//////////////////timeout////////////////
// function getConnection(callback) { /*  www.j av a2s  .  com*/
//     var connection; 
//     try {
//        // Lets assume that the connection failed 
//        throw new Error('connection failed');
//        // Notify callback that connection succeeded?
//        callback(null, connection); 
//     } catch (error) {
//        // Notify callback about error? 
//        callback(error, null); 
//     } 
// } 
// // Usage 
// getConnection(function (error, connection) { 
//     if (error) {
//        console.log('Error:', error.message); 
//     } else {
//        console.log('Connection succeeded:', connection); 
//     } 
// }); 
////////////////////////////////error function/////////////////
function printit(var_name) {// www. ja v  a2s.  c o m
    console.log(global[var_name]);
  }
  
  global.HTML = "HT";
  global.CSS = "C";
  
  printit("CSS"); 
  printit("HTML");
  printit("SQL"); 