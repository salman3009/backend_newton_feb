const Events = require('events');

const eventHandler = new Events();

//listener
eventHandler.on('click',()=>{
    console.log("events trigger");
})


//trigger event
eventHandler.emit('click');
eventHandler.emit('click');