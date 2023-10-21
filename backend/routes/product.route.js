const express=require('express')
const { ProductModel } = require('../model/product.model')

const productRouter=express.Router()


productRouter.post('/fav',async(req,res)=>{
    try {
        const fav=new ProductModel(req.body)
        await fav.save()
        res.send(`Product added to favorite`)
        
    } catch (error) {
        res.send(error)
    }
})


productRouter.get('/favget/:id',async(req,res)=>{
    const {id}=req.params
    try {
        const fav=await ProductModel.find({userID:id})
        res.send(fav)
        
    } catch (error) {
        res.send(error)
    }
})


module.exports={
    productRouter
}
