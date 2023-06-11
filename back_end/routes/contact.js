const express=require('express');
const { createContact, getContact } = require('../controllers/contact');
const router=express.Router();
router.post('/',createContact)
router.get('/',getContact)
// router.get('/',protect,isAdmin,getAdminNews)
// router.put('/',updateNews)
module.exports=router;