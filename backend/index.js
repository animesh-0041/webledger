const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.route")
const { productRouter } = require("./routes/product.route")
const app=express()
app.use(express.json())
app.use(cors())

// app.get('/',(req,res)=>{
//     res.send("ok")
// })
app.use('/',userRouter)
app.use('/user',productRouter)


app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log("Server running at 8080")

})