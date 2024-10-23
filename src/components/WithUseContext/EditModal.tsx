import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { HabitInterface } from "../types";
import HabitForm from "./HabitForm";
import { Button } from "@mui/material";
import { useContext } from "react";
import { HabitsDispatchContext } from "./context/HabitsContext";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
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

const EditModal = ({ open, onClose, habit }: EditModalProps) => {
  const dispatch = useContext(HabitsDispatchContext);
  const handleSubmit = (habit: HabitInterface) => {
    dispatch({
      type: "changed",
      habit: habit,
    });
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
