const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();


app.listen(process.env.PORT,()=>{
   console.log(`SERVER IS RUNNING ON ${process.env.PORT}`);
})