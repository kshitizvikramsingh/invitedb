const express=require("express")
const ObjectId = require('mongodb').ObjectId;
const mongoose=require("mongoose")
var cors = require('cors')
const app=express()
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/guests');
app.use(express.json());
const Guests = mongoose.model('Guests', { name: String });

app.post("/attendance",(req,res)=>{
  const guest = new Guests({ name: req.body.name });
guest.save().then((data) => {
    console.log(req.body)
    
    res.json(req.body)
});
    
})
app.delete('/bikes',async(req,res)=>{
    console.log(req.body)
    const response=await Bike.deleteOne({name:req.body.name});
    console.log(response.deletedCount)
    res.json(response)
})
app.get("/guests",async(req,res)=>{
    const response=await Guests.find({})
    res.json(response)
})


app.listen("80",()=>{
    console.log("app is up on port 80")
})