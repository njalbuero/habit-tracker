import { DialogContent, DialogContentText } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

interface RemoveModalProps {
  open: boolean;
  onClose: () => void;
  onRemoveHabit: () => void;
  habitName: string;
}

const RemoveModal = ({
  open,
  onClose,
  onRemoveHabit,
  habitName,
}: RemoveModalProps) => {
  const handleClose = () => {
    onClose();
  };

  const handleRemoveHabit = () => {
    onRemoveHabit();
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
        <Button onClick={handleClose} sx={{color: "grey.600"}}>
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
