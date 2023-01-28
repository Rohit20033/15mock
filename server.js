
const express = require("express")
const cors = require("cors")
const connect = require("./config/db")
const userRoute = require("./routes/user/user.route")
const calRoute = require("./routes/calculate/calculate.route")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/user",userRoute)
app.use("/calculate",calRoute)
app.get("/",(req,res)=>{
    res.send("Welcome")
})


app.listen(8000,async()=>{
    await connect()
    console.log(`http://localhost:8000/`)
})