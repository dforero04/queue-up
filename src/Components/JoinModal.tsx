import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import * as React from "react";

interface JoinModalProps {
  open: boolean;
  // closeModal:
}

const JoinModal = ({ open }: JoinModalProps) => {
  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Enter Room Code</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="room-code"
            placeholder="Enter Room Code"
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button
          // onClick={closeModal}
          ></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JoinModal;
