const mongoose = require('mongoose');

const ResturantsSchema = new mongoose.Schema({

    price:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    user: {
        type: String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('mycart',ResturantsSchema);