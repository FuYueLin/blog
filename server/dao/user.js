// const mongoose = require('mongoose');
// const Joi = require('joi');

// const userSchema =new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         minlength: 2,
//         maxlength: 15,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true,
//     },
// })

// const User =mongoose.model('User', userSchema)
// User.create({
//     username:'fyl',
//     email:'1251652793@qq.com',
//     password:'a123456789'
// }).then(()=>{
//     console.log("用户创建成功");
    
// }).catch(()=>{
//      console.log("用户创建失败");
// })


// module.exports={
//     User
// }