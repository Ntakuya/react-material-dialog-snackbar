import { createSlice, EntityState, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { TodoEntity } from '@react-material-dialog-snackbar/api';
import { getInitialState, upsertMany } from './adapter';
import { StoreCondition } from '../shared/interfaces/store-conditon';
import { logout } from '../core/action';

export const featureName = 'todo'

export interface TodoState extends EntityState<TodoEntity> {
  condition: StoreCondition,
  error: SerializedError
}

const todoSlice = createSlice({
  name: featureName,
  reducers: {
    upsertMany: upsertMany,
    updateCondition: (state: TodoState, { payload }: PayloadAction<Pick<TodoState, 'condition'>> ) => {
      state.condition = payload.condition
    },
    getListSuccess: (state: TodoState, {payload}: PayloadAction<{
      todoes: TodoEntity[]
    }>) => {
      state.condition = StoreCondition.Idle
      upsertMany(state, payload.todoes)
    },
    rejected: (state: TodoState, { payload }: PayloadAction<{
      error: SerializedError
    }>) => {
      state.condition = StoreCondition.Idle
      state.error = payload.error
    }
  },
  initialState: getInitialState({
    condition: StoreCondition.Idle,
    error: null
  }),
  extraReducers: builder => {
    builder.addCase(logout, (state, action) => {
      console.log("todo call", state)
      todoSlice.caseReducers.updateCondition(state, { ...action, payload: { condition: StoreCondition.Loading } })
    }).addDefaultCase((state, action) => {})
  },
});

export const {
  reducer,
  actions: fromSliceActions,
} = todoSlice;
