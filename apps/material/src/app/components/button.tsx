import { DialogContent } from './dialog-content';
import React, { useContext } from 'react';
import { useDispatch } from "react-redux"
import { DialogContext } from '../contexts/dialog-contextt';
import { clearCache } from "../store/core/action"

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  const { createDialog } = useContext(DialogContext)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => createDialog(<DialogContent />)}>click to open</button>
      <button onClick={() => dispatch(clearCache())}>clear cache</button>
    </div>
  );
}

export default Button;
