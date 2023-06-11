const mongoose=require('mongoose');
const schema=mongoose.Schema;
const admincontact=new schema({
    name: {
        type:String,
    },
    email: {
        type:String,
        required:[true, 'please add email']
    },
    message: {
        type:String,
        required:[true, 'please add message']
    }, 
},
{
    timestamps:true,
})
const contactUs=mongoose.model('ContactUs',admincontact);
module.exports=contactUs;
