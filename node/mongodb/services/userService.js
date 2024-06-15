const {User} = require('../models');
function getUserList(){
    return User.find({},{username:1,loginId:1,_id:1})
}
function getUserById(id){
    return User.findById(id);
}

module.exports = {
    getUserList,
    getUserById
}