import { MovieModel } from "../db";
import { IMovie } from "../db/MovieSchema";
import { Movies } from "../entities/Movie";
type SearchResult = {
    dataList: IMovie[],
    total: number,
    page: number,
    pageSize: number
}
export class MovieService {
    public static async add(movie: Movies): Promise<IMovie> {
        return await MovieModel.create(movie)
    }
    public static async edit(id: string, movie: Partial<Movies>) {
        await MovieModel.updateOne({ _id: id }, movie)
    }
    public static async delete(id: string) {
        await MovieModel.deleteOne({_id:id})
    }
    public static async findById(id:string):Promise<IMovie|null>{
        return await MovieModel.findById(id)
    }
    public static async findByName(query:string,page:number=1, pageSize: number=2):Promise<SearchResult>{
         const dataList = await MovieModel.find({name:{$regex:new RegExp(query) }}).skip(page* pageSize - pageSize).limit(pageSize)
         const total =  await MovieModel.find({name:{$regex:new RegExp(query) }}).countDocuments();
         return {
            page,
            pageSize,
            total,
            dataList
         }
    }
}