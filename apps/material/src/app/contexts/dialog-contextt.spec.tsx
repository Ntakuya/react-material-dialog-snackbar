import React from 'react';
import { render } from '@testing-library/react';

import DialogContextt from './dialog-contextt';

describe('DialogContextt', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DialogContextt />);
    expect(baseElement).toBeTruthy();
  });
});
