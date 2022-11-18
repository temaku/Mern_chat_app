const express = require("express")
const {
    registerUser,
    allUsers,
    authUser
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect,allUsers);
router.route("/").post(registerUser);
router.route("/login").post(authUser)

module.exports = router;


