import { createEntityAdapter } from '@reduxjs/toolkit';
import { Todo } from '../../interafces/todo';

const todoAdapter = createEntityAdapter<Todo>();

export const { getInitialState, getSelectors } = todoAdapter;
