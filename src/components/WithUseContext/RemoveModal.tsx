import { DialogContent, DialogContentText } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { HabitsDispatchContext } from "./context/HabitsContext";
import { useContext } from "react";

interface RemoveModalProps {
  open: boolean;
  onClose: () => void;
  habitName: string;
  id: number;
}

const RemoveModal = ({ open, onClose, habitName, id }: RemoveModalProps) => {
  const dispatch = useContext(HabitsDispatchContext);

  const handleClose = () => {
    onClose();
  };

  const handleRemoveHabit = () => {
    dispatch({
      type: "removed",
      id: id,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Remove Habit?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`The following habit will be removed: "${habitName}"`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: "grey.600" }}>
          Cancel
        </Button>
        <Button onClick={handleRemoveHabit} autoFocus color="error">
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveModal;
