import React from 'react';
import Button from './components/button';

import DialogcontextProvider from './contexts/dialog-contextt';

const App = () => (
  <div>
    <DialogcontextProvider>
      <div>sample</div>
      <Button />
    </DialogcontextProvider>
  </div>
)

export default App