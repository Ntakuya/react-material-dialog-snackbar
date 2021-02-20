import React from 'react';
import { render } from '@testing-library/react';

import TodoListContainer from './todo-list-container';

describe('TodoListContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoListContainer />);
    expect(baseElement).toBeTruthy();
  });
});
