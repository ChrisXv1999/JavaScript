//./mongod --fork -dbpath ../data --logpath ../log/mongo.log --logappend
import mongoose from "mongoose";
import MovieModel from "./MovieSchema"
mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
    console.log('数据库连接成功');
}).catch(err=>{
    console.log(err);
})
export {
    MovieModel
}
