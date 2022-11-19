const express = require("express");
const { accessChat,fetchChats,createGroupChat} = require("../controller/chatController")
const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

router.route("/").post(protect,accessChat);
router.route("/").get(protect,fetchChats)
router.route("/group").post(protect,createGroupChat)


module.exports = router;