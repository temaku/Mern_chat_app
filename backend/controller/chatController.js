const asyncHandler = require("express-async-handler")
const Chat = require("../model/chatModel")
const User = require("../model/userModel")

const accessChat = asyncHandler(async (req,res)=>{
    const { userId } = req.body
    if(!userId){
        console.log("UserId params not sent with the request")
        res.sendStatus(400)
    }
})