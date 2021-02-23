import { createDraftSafeSelector } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { selectAllTodo, todoActions } from '../store/todo';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/core/action';

const containerSelector = createDraftSafeSelector(selectAllTodo, (todos) => ({
  todos,
}));

/* eslint-disable-next-line */
export interface TodoListContainerProps {}

export function TodoListContainer(props: TodoListContainerProps) {
  const { todos } = useSelector(containerSelector);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(todoActions.getTodoList())
  }, [
    dispatch
  ])
  return (
    <div>
      {todos.map((t) => (
        <div key={t.title}>{t.title}</div>
      ))}
      <button onClick={() => dispatch(logout()) }>logout</button>
    </div>
  );
}

export default TodoListContainer;
