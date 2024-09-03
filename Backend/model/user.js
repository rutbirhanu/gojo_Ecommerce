const mongoose = require("mongoose")

const user = mongoose.Schema({
    password: String,
    email: String,
    location:String
})

module.exports = mongoose.model("userModel", user) 