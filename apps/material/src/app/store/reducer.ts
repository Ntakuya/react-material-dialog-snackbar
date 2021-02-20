import { combineReducers, configureStore } from "@reduxjs/toolkit"
import * as fromTodo from "./todo"
import { clearCacheBase } from "./core/action"

const combinedReducer = combineReducers({
    [fromTodo.featureName]: fromTodo.reducer
})

export const reducers = (state, action) => {
    if(action.type === clearCacheBase.toString()) {
        return combinedReducer(undefined, action)
    }
    return combinedReducer(state, action)
}

export type RootReducer = typeof reducers