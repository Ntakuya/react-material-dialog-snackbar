import { combineReducers, configureStore } from "@reduxjs/toolkit"
import * as fromTodo from "./todo"

export const reducers = combineReducers({
    [fromTodo.featureName]: fromTodo.reducer
})

export type RootReducer = typeof reducers