const asyncHandler = require('express-async-handler');
const contactUs = require('../model/contact');
const createContact=asyncHandler(async(req,res)=>{
  const {name,email,message}=req.body;
  if(!name || !email || !message){
    res.status(404);
    throw new Error("please fill all fields");
  }
  let admincontacts=new contactUs({
    name:req.body.name,
    email:req.body.email,
    message:req.body.message,
  })
  admincontacts.save().then(()=>{
    res.json({
      message:"saved"
    })
  })
  .catch((error)=>{
    res.json({
      message:"error"
    })
  })
  })
  const getContact=asyncHandler(async(req,res)=>{
    const contact=await contactUs.find();
    if(!contact){
      res.status(500)
      throw new Error('cannot fetch a contact')
    }
    res.status(200).json(contact);
  })
  module.exports={
    createContact,
    getContact
  }