const express = require('express')
const userRoutes = require("./route/userRoute");
const connectDb = require('../backend/config/db')
const chatRoute = require("./route/chatRoute")
 require('dotenv/config');
const app = express();


app.use(express.json());

const PORT = process.env.PORT
 connectDb();

 app.use("/api/user",userRoutes)
 app.use("/api/chat",chatRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}...`)
})
