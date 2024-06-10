import { Reducer } from "redux";
import { IMovie, SearchCondition } from "../../services/MovieService";
import { DeleteMovieAction, MovieActions, SaveMoviesAction, SetConditionAction, SetLoadingAction } from "../actions/MovieAction";

export interface IMovieState {
    data: IMovie[],
    condition: SearchCondition,
    total: number,
    isLoading: boolean
}

const defaultState: IMovieState = {
    data: [],
    condition: {
        page: 1,
        pageSize: 5,
        query: ''
    },
    isLoading: false,
    total: 0
}
const saveMovie:Reducer<IMovieState,SaveMoviesAction> = (state,action)=>{
    return Object.assign({},state,{
        data: action.payload.movies,
        total: action.payload.total
    })
}

const setCondition:Reducer<IMovieState,SetConditionAction> = (state,action)=>{
    return Object.assign({},state,{...action.payload})
}
const setLoading:Reducer<IMovieState,SetLoadingAction> = (state,action)=>{
    return Object.assign({},state,{isLoading: action.payload});
}
const deleteMovie:Reducer<IMovieState,DeleteMovieAction> = (state,action)=>{
    const newData = state!.data.filter(m=>m._id !== action.payload);
    return Object.assign({},state,{data:newData,total: newData.length})
}
export default function setMovieState(state: IMovieState = defaultState, action: MovieActions) {
    switch (action.type) {
        case 'movie_delete':
            return deleteMovie(state,action)
        case 'movie_save':
            return saveMovie(state,action);
        case 'movie_setCondition':
            return setCondition(state,action)
        case 'movie_setLoading':
            return setLoading(state,action)
        default:
            return state
    }
}