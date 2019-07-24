function Message() {//from   w  ww. ja  va2  s  .c om
    var message = 'hello from my end';
    function setMessage(newMessage) {
       if (!newMessage) 
          throw new Error('cannot set empty message');
       message = newMessage;
    }
    function getMessage() {
       return message;
    }
    function printMessage() { 
       console.log(message); 
    }
    return {
       setMessage: setMessage,
       getMessage: getMessage,
       printMessage: printMessage
    }; 
 } 
 // Pattern in use 
 var hi1 = Message(); 
 hi1.printMessage(); // hello 
 
 var hi2 = Message(); 
 hi2.setMessage('hello'); 
 hi2.printMessage(); // hi 
 
 hi1.printMessage(); // hello 