var expres=require('express')
const contactRoute=express.Router()
var contact = require('../models/Contact')

contactRoute.post("/contact",async (req,res)=>{

    try {
        let newContact= new Contact ({...req.body})
        let result=await newcontact.save()
        res.send({result,msg:'contact saved'})
    } catch (error) {
        res.send({msg:'can not save contact'})
        console.log(error)
        
    }
})
module.exports=contactRoute