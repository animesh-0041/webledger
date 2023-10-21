const express=require('express')
const { UserModel } = require('../model/auth.model')
const userRouter=express.Router()




userRouter.post('/user',async(req,res)=>{
    const {displayName,email}=req.body
    try {
        const existUser= await UserModel.findOne({email}) 
        if(!existUser){
            const user= new UserModel(req.body)
            await user.save()
            res.send(user)
        }
        else{
            res.send(existUser)
        }
        
    } catch (error) {
        res.send(error)
    }
})


module.exports={
    userRouter
}