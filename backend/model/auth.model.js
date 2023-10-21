const mongoose=require("mongoose")



const userSchema=mongoose.Schema({
    email:{type:String},
    displayName:{type:String},
})

const UserModel=mongoose.model("user",userSchema)
module.exports={
    UserModel
}