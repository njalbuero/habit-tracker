import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { HabitInterface } from "../types";
import HabitForm from "./HabitForm";
import { Button } from "@mui/material";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  onEditHabit: (habit: HabitInterface) => void;
  habit: HabitInterface;
}

const theme = createTheme({
  components: {
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingTop: "10px !important",
        },
      },
    },
  },
});

const EditModal = ({ open, onClose, onEditHabit, habit }: EditModalProps) => {
  const handleSubmit = (habit: HabitInterface) => {
    onEditHabit(habit);
    onClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog fullWidth={true} maxWidth="md" open={open} onClose={onClose}>
        <DialogTitle>Edit Habit</DialogTitle>
        <DialogContent
          sx={{
            pt: 4,
          }}
        >
          <HabitForm onSubmit={handleSubmit} habit={habit} />
          <Button
            variant="contained"
            onClick={onClose}
            fullWidth
            //grey for bgcolor
            sx={{ bgcolor: "grey.500" }}
            style={{ marginTop: "10px" }}
          >
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default EditModal;
