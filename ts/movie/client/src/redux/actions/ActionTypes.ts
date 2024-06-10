import { Action } from "redux";
export interface IAction<T extends string,P> extends Action<T>{
    payload:P
}
