
const express = require("express")
const { dataModal } = require("./calculate.model")


const app = express.Router()

app.post("",async(req,res)=>{

    let {weight,height}=req.body
    
    let  base =  3.28084 

    let nheight = height*base
    

    let ans = weight/nheight
    ans = ans*2


    const data = new dataModal({weight,height})
     await data.save()
     
     res.send(`${ans}`)
})


module.exports=app