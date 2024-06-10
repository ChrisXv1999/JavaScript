import axios from "axios";
export interface IMovie {
    _id: string,
    name: string;
    types: string[];
    areas: string[];
    timeLong: number;
    isClassic: boolean;
    isHot: boolean;
    isComing: boolean;
    description?: string;
    poster?: string;
}
export interface SearchCondition  {
    page:number,
    pageSize: number,
    query:string,
}
type SearchResult = {
    dataList: IMovie[],
    total: number,
    page: number,
    pageSize: number
}
export class MovieService {
    public static async add(movie: IMovie) {

    }
    public static async getList({query = '', page = 1, pageSize = 5}:Partial<SearchCondition>):Promise<SearchResult> {
        const response = await axios.get('/api/find-name', {
            data: {
                query, page, pageSize
            }
        })
        return response.data
    }

}