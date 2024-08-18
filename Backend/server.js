const express= require("express")
const cors = require("cors")
const admin = require("firebase-admin")
const userRoute = require("./route/userRoute")
const connectDB=require("./config/dbConfig")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const app = express()
app.use(cors())
app.use(express.json())
app.use("/user", userRoute)
    
(async () => {
    try {
        await connectDB(process.env.MONGODB_CONNECTION);
        console.log("Database connected");
    } catch (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1); // Exit process if database connection fails
    }
})();


app.listen(3000, () => {
    console.log("server has started")
})