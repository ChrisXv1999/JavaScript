import mongoose from 'mongoose'
import { Movies } from '../entities/Movie'
export type IMovie = Movies & mongoose.Document;
const moviesSchema =  new mongoose.Schema<IMovie>({
    name: String,
    types: [String],
    areas: [String],
    timeLong: Number,
    isHot: Boolean,
    isComing:Boolean,
    isClassic: Boolean,
    description: String,
    poster: String,
},
{
    versionKey: false
});
export default mongoose.model("Movie",moviesSchema);