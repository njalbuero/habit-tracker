import List from "@mui/material/List";
import Box from "@mui/material/Box";

import Habit from "./Habit";
import HabitForm from "./HabitForm";
import {
  HabitsContext,
  HabitsDispatchContext,
} from "./context/HabitsContext";
import { useContext } from "react";
import { HabitInterface } from "../types";

const HabitsContainer = () => {
  const habits = useContext(HabitsContext);
  const dispatch = useContext(HabitsDispatchContext);

  const handleAddHabit = (habit: HabitInterface) => {
    dispatch({
      type: "added",
      habit: habit,
    });
  };
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" gap={4}>
      <HabitForm onSubmit={handleAddHabit} />
      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        {habits.map((habit) => {
          const labelId = `checkbox-list-secondary-label-${habit.id}`;
          return <Habit key={habit.id} habit={habit} labelId={labelId} />;
        })}
      </List>
    </Box>
  );
};

export default HabitsContainer;
