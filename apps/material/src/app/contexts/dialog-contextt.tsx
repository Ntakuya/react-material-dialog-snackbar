import { Dialog } from '@material-ui/core';
import React, { createContext } from 'react';

export interface DialogContextValue {
  createDialog?: (elm: JSX.Element) => void;
  closeDialog?: () => void;
  open: boolean;
}

/* eslint-disable-next-line */
export interface DialogContexttProps {}

interface DialogContextState {
  open: boolean;
  elm: JSX.Element;
}

export const DialogContext = createContext<DialogContextValue>({
  open: false,
});

export class DialogcontextProvider extends React.Component<
  DialogContexttProps,
  DialogContextState
> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      elm: null,
    };
  }

  createDialog = (elm: JSX.Element) => {
    this.setState((state) => ({
      ...state,
      open: true,
      elm,
    }));
  };

  closeDialog = () => {
    this.setState((state) => ({
      ...state,
      open: false,
      elm: null,
    }));
  };

  render() {
    return (
      <DialogContext.Provider
        value={{
          open: this.state.open,
          createDialog: this.createDialog,
          closeDialog: this.closeDialog,
        }}
      >
        {this.props.children}
        <Dialog open={this.state.open}>{this.state.elm}</Dialog>
      </DialogContext.Provider>
    );
  }
}

export default DialogcontextProvider;
