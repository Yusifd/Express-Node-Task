const express=require('express')
const bodyParser = require("body-parser");
const cors=require('cors')
let app=express()
app.use(cors())
app.use(bodyParser.json())
const HOST=5000
let arr=[{username:'Yusif',address:'Otto', id:1},
{username:'Kamal',address:'Pekin', id:2},
{username:'Nurlan',address:'Istanbul', id:3},
{username:'Samir',address:'Teqeran', id:4}]
app.get('/getUsers',(req,res)=>{
    res.json(arr)
})
app.listen(HOST,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(`localhost:${HOST}`)
})