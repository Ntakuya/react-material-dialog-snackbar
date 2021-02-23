import { createAsyncThunk } from "@reduxjs/toolkit";
import { featureName, fromSliceActions} from "./slice"
import { todoApi } from "../../core/api"
import { StoreCondition } from "../shared/interfaces/store-conditon";

/**
 * after Update
 */
const getTodoList = createAsyncThunk(
    `[${featureName}] Get Todo List`,
    (_, thunkApi) => {
        thunkApi.dispatch(fromSliceActions.updateCondition({ condition: StoreCondition.Loading }))
        return todoApi.todoControllerIndex()
            .then(({ data }) => {
                thunkApi.dispatch(fromSliceActions.getListSuccess({ todoes: data.todoes}))
            })
            .catch((error) => {
                thunkApi.dispatch(fromSliceActions.rejected({ error }))
            })
    }
)

export const todoActions = {
    ...fromSliceActions,
    getTodoList
}