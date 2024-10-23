import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { HabitInterface } from "../types";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import blue from "@mui/material/colors/blue";

import { useState } from "react";

import RemoveModal from "./RemoveModal";
import EditModal from "./EditModal";

interface HabitProps {
  habit: HabitInterface;
  labelId: string;
  onRemoveHabit: (id: number) => void;
  onEditHabit: (habit: HabitInterface) => void;
}

const Habit = ({ habit, labelId, onRemoveHabit, onEditHabit }: HabitProps) => {
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleRemoveHabit = () => {
    onRemoveHabit(habit.id);
  };

  const handleRemoveButtonClick = () => {
    setIsRemoveModalOpen(true);
  };

  const handleRemoveModalClose = () => {
    setIsRemoveModalOpen(false);
  };

  const handleEditButtonClick = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  return (
    <ListItem
      sx={{
        py: 2,
        px: 4,
        bgcolor: blue[200],
      }}
      key={habit.id}
      secondaryAction={
        <Box display="flex" gap={2}>
          <IconButton
            aria-label="edit"
            edge="end"
            onClick={handleEditButtonClick}
          >
            <EditIcon />
          </IconButton>
          <EditModal
            open={isEditModalOpen}
            onClose={handleEditModalClose}
            onEditHabit={onEditHabit}
            habit={habit}
          />
          <IconButton
            aria-label="delete"
            edge="end"
            onClick={handleRemoveButtonClick}
          >
            <DeleteIcon />
          </IconButton>
          <RemoveModal
            open={isRemoveModalOpen}
            onClose={handleRemoveModalClose}
            onRemoveHabit={handleRemoveHabit}
            habitName={habit.name}
          />
        </Box>
      }
      disablePadding
    >
      <ListItemText id={labelId} primary={habit.name} />
    </ListItem>
  );
};

export default Habit;
