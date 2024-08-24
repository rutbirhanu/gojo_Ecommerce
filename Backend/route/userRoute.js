const express = require("express")
const router = express.Router()
const { SignUp, LogIn, SignInWithGoogle } = require("../controller/userController")
const verifyGoogleToken= require("../middleware/verifyGoogleToken")


router.route("/sign-up").post(SignUp)
router.route("/login").post(LogIn)
router.route("/signWithGoogle").post(verifyGoogleToken, SignInWithGoogle)

module.exports= router