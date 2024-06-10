import { createStore } from "redux";
import { rooReducer } from "./reducers";

export const store = createStore(rooReducer)