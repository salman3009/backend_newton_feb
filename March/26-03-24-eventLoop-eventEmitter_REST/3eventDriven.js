const Events = require('events');

const eventHandler = new Events();

//listener
eventHandler.on('call',()=>{
    console.log("events trigger");
})

eventHandler.on('message',(input)=>{
    console.log("message",input);
})

//trigger event
//call event name(user defined)
eventHandler.emit('call');
eventHandler.emit('call');

eventHandler.emit('message',"welcome to newton");
eventHandler.emit('message',"welcome to nodejs");