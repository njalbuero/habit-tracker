import List from "@mui/material/List";
import Box from "@mui/material/Box";

import Habit from "./Habit";
import HabitForm from "./HabitForm";
import useHabit from "./hooks/useHabit";

const HabitsContainer = () => {
  const { habits, addHabit, removeHabit, editHabit } = useHabit();

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
