require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL,{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log(`connection successful`);
}).catch((error)=>{
    // console.log(process.env.MONGO_CONNECTION_URL);
    console.log(`No connection ${error}`);
})