 var mongoose=require("mongoose")
 var schema=mongoose.Schema

 const contactSchema=new schema({
    name:{
         type:String,
         require:true,

     },

     email:{
        type:String,
        require:true,

    },

    phone:{
        type:String,
        require:true,
    },
 })

 module.exports=Contact=mongoose.model("contact",contactSchema)