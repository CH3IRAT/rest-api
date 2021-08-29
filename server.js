const express = require("express")
const connectDB = require("./config/connectDB")


const app=express()


require('dotenv').config()
connectDB()
app.use(express.json());


app.listen(process.env.PORT,(err)=>err?console.log('error'):console.log('server is connected'))