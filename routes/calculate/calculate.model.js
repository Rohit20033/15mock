const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
    weight:{type:"Number"},
    height:{type:"Number"},
    
})

const dataModal = mongoose.model("data",dataSchema)

module.exports = {dataModal}