
const {Operation, User} = require('./models');

User.updateOne({hobbies:'sing'},{loginId:'Yoona'}).then(res=>{
    console.log(res);
})