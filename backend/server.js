const express = require('express')
const userRoutes = require("./route/userRoute");
const connectDb = require('../backend/config/db')
const chatRoute = require("./route/chatRoute")
const messageRoute = require("./route/messageRoute");
const {notfound,errorHandler} = require("./middleware/errorMiddleware")
const { Socket } = require('socket.io');
 require('dotenv/config');
const app = express();


app.use(express.json());

const PORT = process.env.PORT
 connectDb();

 app.use("/api/user",userRoutes)
 app.use("/api/chat",chatRoute);
 app.use("/api/message",messageRoute)


 app.use(notfound)
 app.use(errorHandler)

const server = app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}...`.yellow.bold)
})

const io = require("socket.io")(server,{
    pingTimeOut:60000,
    cors:{
        origin:"http://localhost:3000"
    }
})
io.on("connection",(socket)=>{
    console.log("Connected to Socket.io");
    socket.on("setup",(userData)=>{
        socket.join(userData._id);
        socket.emit("connected")
    })
    socket.on("join chat",(room)=>{
        socket.join(room);
        console.log("user Joined Room: "+room)
    })
    socket.on("typing",(room)=>socket.in(room).emit("typing"));
    socket.on("stop typing",(room)=>socket.in(room).emit("stop typing"))

    socket.on("new message",(newMessageRecieved)=>{
        var chat = newMessageRecieved.chat
        if(!chat.users) return 
        console.log("chat.users not defined");
        chat.users.forEach((user)=>{
            if(user._id == newMessageRecieved.sender._id) return;
            socket.in(user._id).emit("message received",newMessageRecieved)
        })
    })

    socket.off("setup",()=>{
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
    })

})
