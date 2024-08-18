const express= require("express")
const cors = require("cors")
const userRoute= require("./route/userRoute")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/user", userRoute)



app.listen(3000, () => {
    console.log("server has started")
})