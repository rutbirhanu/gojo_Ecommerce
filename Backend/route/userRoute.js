const express = require("express")
const router = express.Router

router.route("/sign-up").post()
router.route("/login").post()


module.exports= router