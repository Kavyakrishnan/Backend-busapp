const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
const res=require("express/lib/response")
const req=require("express/lib/response")


var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
var busmodel=Mongoose.model("buses",new Mongoose.Schema(
    {
Route:String,
Busname:String,
Busregno:String,
Ownername:String,
Contactno:String
    }
   


))
Mongoose.connect("mongodb+srv://gopika:1234@cluster0.2q4qp.mongodb.net/busdata")
app.post("/api/view",(req,res)=>{
    busmodel.find((error,data)=>{
        if(error)
        {
            res.send({"status":error})
        }
        else{

            res.send({"status":"success","data":data})
        }
    })
    
})

app.post("/api/search",(req,res)=>{
    var getRoute=req.body
    busmodel.find(getRoute,(error,data)=>{
        if(error)
        {
            res.send({"status":error})}
        else
        {
            res.send(data)
           }   
       })   
       })
      
      
       app.post("/api/delete",(req,res)=>{
    var getId=req.body
    busmodel.findOneAndDelete(getId,(error,data)=>{
        if(error){
res.send({"status":error})
        }
        else{
 res.send({"status":"success"})       

        }
    })
})

app.post("/api/busapp",(req,res)=>{
    var getRoute=req.body.Route
var getBusname=req.body.Busname
var getBusregno=req.body.Busregnogi
var getOwnername=req.body.Ownername
var getContactno=req.body.Contactno

data={"Route":getRoute,"Busname":getBusname,"Busregno":getBusregno,"Ownername":getOwnername,"Contactno":getContactno}
    let mybus=new busmodel(data)
    mybus.save((error,data)=>{
        if(error){
            res.sendStatus({"status":"error","data":error})
        }
        else{
            res.sendStatus({"status":"success","data":data}) 
        }
     } )



     res.send(data)
})
app.get("/view",(req,res)=>{res.send("view")
})

app.listen(5014,()=>{
    console.log("successing")
})