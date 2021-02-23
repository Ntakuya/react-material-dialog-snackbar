import { createEntityAdapter } from '@reduxjs/toolkit';
import { TodoEntity } from "@react-material-dialog-snackbar/api"

const todoAdapter = createEntityAdapter<TodoEntity>();

export const { getInitialState, getSelectors, upsertMany, upsertOne } = todoAdapter;
