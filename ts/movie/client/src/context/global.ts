import {createContext} from "react"
export type GlobalContextType = {
    version: string,
    name: string
}
export const GlobalContextState: GlobalContextType = {
    version: "1.0.0",
    name: "movie client"
}
export const GlobalContext = createContext<GlobalContextType>(GlobalContextState)