const express = require('express')
const mongoose =require('mongoose')
const app = express()
const port = process.env.PORT||3000
const Contact= require('./model.js')
const cors=require('cors')
app.use(cors())

mongoose.connect('mongodb+srv://dhanapalc:Dhanapal2020@cluster0.plctvbo.mongodb.net/portfolio-contact?retryWrites=true&w=majority'),{
// mongoose.connect('mongodb://127.0.0.1:27017/demoDB',{
     useUnifiedTopology: true
 };
app.use(express.json());


 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.post('/create_contact',async (req, res) => {

    const newData=req.body;
    const ex= await Contact.create(newData);
    res.send("Success");
  
 })


