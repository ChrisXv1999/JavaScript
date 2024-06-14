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
const request = axios.create({
    baseURL: '/api/',
    timeout: 5000,
})
//请求拦截 
// request.interceptors.request.use
export class MovieService {
    public static async add(movie: IMovie) {

    }
    public static async getList({query = '', page = 1, pageSize = 5}:Partial<SearchCondition>):Promise<SearchResult> {
        const response = await request.get('find-list', {
            params: {
                name:query, page, pageSize
            }
        })
        return response.data
    }
    public static async getDetail(id:string):Promise<IMovie> {
        const response = await request.get('get-detail', {
            params: {
                id
            }
        })
        return response.data
    }

}