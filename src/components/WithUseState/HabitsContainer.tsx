import List from "@mui/material/List";
import Box from "@mui/material/Box";

import Habit from "./Habit";
import HabitForm from "./HabitForm";
import { HabitInterface } from "../types";

import { useState } from "react";

const HabitsContainer = () => {
  const [habits, setHabits] = useState<HabitInterface[]>([]);

  const addHabit = (habit: HabitInterface) => {
    setHabits([...habits, habit]);
  };

  const removeHabit = (id: number) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const editHabit = (newHabit: HabitInterface) => {
    console.log(newHabit);
    setHabits(
      habits.map((habit) => {
        if (habit.id === newHabit.id) {
          return newHabit;
        } else {
          return habit;
        }
      })
    );
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" gap={4}>
      <HabitForm onSubmit={addHabit} />
      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        {habits.map((habit) => {
          const labelId = `checkbox-list-secondary-label-${habit.id}`;
          return (
            <Habit
              key={habit.id}
              habit={habit}
              labelId={labelId}
              onRemoveHabit={removeHabit}
              onEditHabit={editHabit}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default HabitsContainer;
