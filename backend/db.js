const mongoose=require("mongoose")

const connection= mongoose.connect("mongodb+srv://Animesh:Ghoroi@cluster0.mfcptlc.mongodb.net/webledger?retryWrites=true&w=majority")

module.exports={
    connection
}