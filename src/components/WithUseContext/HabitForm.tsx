import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

import { HabitInterface, FrequencyType } from "../types";

import { useState } from "react";

interface HabitFormProps {
  onSubmit: (habit: HabitInterface) => void;
  habit?: HabitInterface;
}

const FREQUENCIES = [
  {
    value: "daily",
    label: "Daily",
  },
  {
    value: "weekly",
    label: "Weekly",
  },
  {
    value: "monthly",
    label: "Monthly",
  },
];

const initialHabit: HabitInterface = {
  id: 0,
  name: "",
  frequency: "daily",
};

const HabitForm = ({ onSubmit, habit: existingHabit }: HabitFormProps) => {
  const [habit, setHabit] = useState<HabitInterface>(
    existingHabit || initialHabit
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHabit({
      ...habit,
      name: event.target.value,
    });
  };

  const handleFrequencyChange = (event: SelectChangeEvent<FrequencyType>) => {
    setHabit({
      ...habit,
      frequency: event.target.value as FrequencyType,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      ...habit,
      id: existingHabit ? existingHabit.id : Math.floor(Math.random() * 1000),
    });

    setHabit(initialHabit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          fullWidth
          label="Habit"
          id="habit-input"
          value={habit.name}
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel id="frequency-select-label">Frequency</InputLabel>
          <Select
            labelId="frequency-select-label"
            id="frequency-select"
            value={habit.frequency}
            label="Frequency"
            onChange={handleFrequencyChange}
          >
            {FREQUENCIES.map((frequency) => (
              <MenuItem key={frequency.value} value={frequency.value}>
                {frequency.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" disabled={!habit.name}>
          {existingHabit ? "Update" : "Add"}
        </Button>
      </Box>
    </form>
  );
};

export default HabitForm;
