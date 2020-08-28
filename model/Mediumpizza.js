const mongoose = require ('mongoose');
const MediumSchema = new mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    },
    price:{
        type:String,
        required:false
    },
    image: {
        type:String,
        required:false
    }
},{timestamps:true});

module.exports = mongoose.model('Mediumpizza',MediumSchema);