
const express = require("express")

const app = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { userModal } = require("./user.model")

app.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body
    const existed = await userModal.findOne({email})
    
    if(existed!==null){
        res.send("Email already exits")
    }

    else{
        try {
        bcrypt.hash(password, 4, async function(err, hash) {
            const user = new userModal({name,email,password:hash})
            await user.save()
            res.send("Signup Completed")
         });
    } catch (error) {
        console.log(error)
        res.send("Somting went worng")
    }
    }
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body

    
        const user = await userModal.find({email})
         if(user.length===0){
            res.send("Create your Account or wrong email")
         }
         if(user.length!==0){
           const hashed_password = user[0].password
           bcrypt.compare(password, hashed_password, function(err, result) {
              if(result){
                const token = jwt.sign({ userId: user[0]._id }, 'shhhhh')
                res.send(token)
              }
              else{
                res.send("Log in failed ! Check your password")
              }
        });
         }
    
})



module.exports=app