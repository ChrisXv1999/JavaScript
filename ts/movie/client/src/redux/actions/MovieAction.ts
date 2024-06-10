import { IMovie, SearchCondition } from "../../services/MovieService";
import { IAction } from "./ActionTypes";
export type SaveMoviesAction = IAction<'movie_save', {
    movies: IMovie[],
    total: number,
}>
function saveMoviesAction(movies: IMovie[], total: number): SaveMoviesAction {
    return {
        type: 'movie_save',
        payload: {
            movies,
            total
        }
    }
}
export type SetLoadingAction = IAction<'movie_setLoading', boolean>
function setLoadingAction(isLoading: boolean): SetLoadingAction {
    return {
        type: 'movie_setLoading',
        payload: isLoading
    }
}
export type SetConditionAction = IAction<'movie_setCondition', SearchCondition>
function setConditionAction(condition: SearchCondition): SetConditionAction {
    return {
        type: 'movie_setCondition',
        payload: condition
    }
}
export type DeleteMovieAction = IAction<'movie_delete', string>;
function deleteMovieAction(id: string): DeleteMovieAction {
    return {
        type: 'movie_delete',
        payload: id
    }
}
//可辨识的联合
export type MovieActions = SaveMoviesAction | SetLoadingAction | SetConditionAction | DeleteMovieAction
export {
    saveMoviesAction,
    setLoadingAction,
    setConditionAction,
    deleteMovieAction,
}