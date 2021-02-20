import { DialogContent } from './dialog-content';
import React, { useContext } from 'react';
import { DialogContext } from '../contexts/dialog-contextt';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  const { createDialog } = useContext(DialogContext)
  return (
    <div>
      <button onClick={() => createDialog(<DialogContent />)}>click to open</button>
    </div>
  );
}

export default Button;
