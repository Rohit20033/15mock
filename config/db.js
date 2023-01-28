const mongoose = require("mongoose")

const connect = async ()=>{
    return mongoose.connect(`mongodb+srv://rohit:rohit123@cluster0.4gnnmll.mongodb.net/BMI?retryWrites=true&w=majority`)
}

module.exports=connect