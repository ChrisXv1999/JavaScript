const {Schema,Types, model} = require('mongoose');
const addressSchema = require('./addressSchema')
const userSchema = new Schema({
    loginId: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        maxLength: 18,
        //上面这些验证事mongoose添加的 
        index: true , // 设为索引
        unique: true, // 特殊索引 唯一索引
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        maxLength: 18,
        select: false // 默认查询不会查询该字段
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 9,
    },
    hobbies: {
        type: [String],
        required: true,
        default: []
    },
    address: {
        type: addressSchema
    }
})
module.exports = model('User',userSchema)