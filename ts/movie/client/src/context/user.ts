import { createContext } from "react";
export enum StateEnum {
    LOGIN,
    LOGOUT
}
export interface UserContextType  {
    loginId: string,
    username: string,
    loginState: StateEnum,
    loginAddress?: String
}
export const UserContextState: UserContextType = {
    loginId: Math.random().toString(36).substring(2),
    username: "chris",
    loginState: StateEnum.LOGIN,
}
export const UserContext = createContext<UserContextType>(UserContextState)