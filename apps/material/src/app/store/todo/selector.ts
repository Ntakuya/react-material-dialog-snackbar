import { createDraftSafeSelector } from "@reduxjs/toolkit"
import { RootReducer } from "../reducer"
import { featureName, TodoState } from "./slice"
import { getSelectors } from "./adapter"

const selectTodoSelector = state => state[featureName]

export const {
    selectAll: selectAllTodo
} = getSelectors<TodoState>(selectTodoSelector)
