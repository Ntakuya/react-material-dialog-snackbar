import { createSlice, EntityState } from '@reduxjs/toolkit';
import { Todo } from '../../interafces/todo';
import { getInitialState } from './adapter';

const todoSlice = createSlice({
  name: 'todo',
  reducers: {},
  initialState: getInitialState(),
  extraReducers: {},
});

export interface TodoState extends EntityState<Todo> {}

export const {
  reducer,
  actions: froSliceActions,
  name: featureName,
} = todoSlice;
