import React from 'react';
import Button from './components/button';
import { Provider } from 'react-redux';
import { store } from './store';
import DialogcontextProvider from './contexts/dialog-contextt';
import TodoListContainer from './containers/todo-list-container';

const App = () => (
  <Provider store={store}>
    <DialogcontextProvider>
      <div>sample</div>
      <Button />
      <TodoListContainer />
    </DialogcontextProvider>
  </Provider>
);

export default App;
