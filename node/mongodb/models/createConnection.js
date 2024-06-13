const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.connection.on('open',()=>{
    console.log('connect open');
})