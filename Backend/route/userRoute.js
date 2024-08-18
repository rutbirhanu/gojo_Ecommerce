const express = require("express")
const router = express.Router
const {SignUp, LogIn} = require("../controller/userController")

router.route("/sign-up").post(SignUp)
router.route("/login").post(LogIn)


module.exports= router