import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import "../styles.css";
import * as React from "react";

interface JoinModalProps {
  open: boolean;
  closeModal: any;
}

const JoinModal = ({ open, closeModal }: JoinModalProps) => {
  return (
    <Dialog
      open={open}
      // onClose={(closeModal, "backdropClick")}
    >
      <DialogTitle>Enter Room Code</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          id="room-code"
          placeholder="Enter Room Code"
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="contained" onClick={closeModal}>
          Join
        </Button>
      </DialogActions>
      <Typography variant="caption">Start a room here!</Typography>
    </Dialog>
  );
};

export default JoinModal;
