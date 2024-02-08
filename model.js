const mongoose=require('mongoose');
const contactSchema=new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String,
});
const Contact =mongoose.model('contact',contactSchema);
module.exports=Contact;