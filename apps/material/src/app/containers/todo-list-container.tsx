import { createDraftSafeSelector } from '@reduxjs/toolkit';
import React from 'react';
import { selectAllTodo } from '../store/todo/selector';
import { useselector } from "react-redux"

const containerSelector = createDraftSafeSelector(
  selectAllTodo,
  todos => ({
    todos
  })
)

/* eslint-disable-next-line */
export interface TodoListContainerProps {}

export function TodoListContainer(props: TodoListContainerProps) {
  const { todos } = useselector(containerSelector)
  return (
    <div>
      {todos.map(t => (<div key={t.title}>{t.title}</div>))}
    </div>
  );
}

export default TodoListContainer;
