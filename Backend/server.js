const express= require("express")
const cors = require("cors")
const admin = require("firebase-admin")
const userRoute = require("./route/userRoute")
const connectDB = require("./config/dbConfig")
const serviceAccount = require("./serviceAccountKey.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const app = express()
app.use(cors())
app.use(express.json())
app.use("/user", userRoute)
    

connectDB(process.env.MONGODB_CONNECTION)
app.listen(3500, () => {
    console.log("server has started")
})