const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")


var app=Express()
app.get("/bookadd",(req,res)=>{
    var getTitle=req.body.title
    var getAuthor=req.body.author
    var getPrice=req.body.price
    data={"title":getTitle,"author":getAuthor,"price":getPrice}
})


app.listen(4008,()=>{
    console.log("success")
})