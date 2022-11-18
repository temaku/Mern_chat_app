const mongoose = require("mongoose");
const colors = require("colors")

const connectDb = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
         console.log(`Mongo Db connected:${conn.connection.host}`.cyan.underline)
     
    }catch(error){
        console.log(`Error :${error.message}`.red.bold)
        process.exit();

    }
};
module.exports = connectDb;
