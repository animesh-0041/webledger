const mongoose=require("mongoose")



const productSchema=mongoose.Schema({
    favID:{type:String},
    displayName:{type:String},
    userID:{type:String},
    email:{type:String},
    image:{type:String},
    title:{type:String}
})

const ProductModel=mongoose.model("favorite",productSchema)
module.exports={
    ProductModel
}