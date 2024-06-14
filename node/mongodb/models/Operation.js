const mongoose = require('mongoose');
const addressSchema = require('./addressSchema')
const operationType = ["login","logout","read"];
const operationSchema = new mongoose.Schema({
    operation: {
        type: String,
        required: true,
    }, 
    time:{
        type: Date,
        default: Date.now,
    },
    type: {
        type: String,
        required: true,
        enum: operationType
    },
    userId:{
        type: mongoose.Types.ObjectId,
        required: true,
    },
    extraInfo: {
        type: mongoose.Schema.Types.Mixed
    },
    address: {
        type: addressSchema
    }
})
module.exports = mongoose.model('Operation',operationSchema)