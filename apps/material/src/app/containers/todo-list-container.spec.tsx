import React from 'react';
import { cleanup, render } from '@testing-library/react';
import configureStore from "redux-mock-store"
import TodoListContainer from './todo-list-container';
const { Provider } = jest.requireActual("react-redux")
const mockStore = configureStore()

jest.mock("react-redux", () => ({
  useselector: jest.fn().mockReturnValue({
    todos: []
  }),
  useDispatch: jest.fn().mockReturnValue(jest.fn())
}))

describe('TodoListContainer', () => {
  afterEach(() => {
    cleanup()
  })
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={mockStore()}>
        <TodoListContainer  />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
