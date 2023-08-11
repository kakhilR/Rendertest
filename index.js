import express from 'express';

const app = express();


app.get("/hi",(req,res)=>{
    res.send("hello")
})

app.listen(8000,()=>{
    console.log("listening on 8000")
})