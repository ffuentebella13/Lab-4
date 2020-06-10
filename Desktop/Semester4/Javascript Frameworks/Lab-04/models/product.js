const mongoose = require('mongoose');

// You need to create a new schema and assign it the following
// constant

const ProductSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true //this should be left no blank or null
    },
    Description:{
        type: String,
        required: false
    },
    price:{
        type: Number,
        required: true
    }
    
},{
timestamps: true
}); 

module.exports = mongoose.model('Product', ProductSchema);

