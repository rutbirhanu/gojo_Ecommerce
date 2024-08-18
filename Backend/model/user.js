const mongoose = require("mongoose")

const user = mongoose.Schema({
    password: String,
    email: String,
})

module.exports = mongoose.model("userModel", user) 