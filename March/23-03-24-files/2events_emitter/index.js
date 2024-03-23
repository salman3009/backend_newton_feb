const Events = require('events');

const eventHandler = new Events();

//listener
eventHandler.on('call',()=>{
    console.log("events trigger");
})


//trigger event
eventHandler.emit('call');
eventHandler.emit('call');