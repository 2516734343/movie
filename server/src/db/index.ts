import Mongoose from "mongoose";
import MovieModal from './MovieSchema';


Mongoose.connect("mongodb://localhost:27017/moviedb").then(() => console.log('连接数据库成功'))


export {MovieModal}