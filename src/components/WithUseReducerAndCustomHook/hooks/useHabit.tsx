import { useReducer } from "react";
import { ActionInterface, HabitInterface } from "../../types";

const useHabit = () => {
  const [habits, dispatch] = useReducer(habitsReducer, []);

  const addHabit = (habit: HabitInterface) => {
    dispatch({
      type: "added",
      habit: habit,
    });
  };

  const removeHabit = (id: number) => {
    dispatch({
      type: "removed",
      id: id,
    });
  };

  const editHabit = (habit: HabitInterface) => {
    dispatch({
      type: "changed",
      habit: habit,
    });
  };

  return { habits, addHabit, removeHabit, editHabit };
};

export default useHabit;

function habitsReducer(
  habits: HabitInterface[],
  action: ActionInterface
): HabitInterface[] {
  switch (action.type) {
    case "added": {
      return [...habits, action.habit as HabitInterface];
    }
    case "changed": {
      return habits.map((habit) => {
        if (habit.id === action.habit?.id) {
          return action.habit;
        } else {
          return habit;
        }
      });
    }
    case "removed": {
      return habits.filter((habit) => habit.id !== action.id);
    }
    default:
      throw Error("Unknown action " + action.type);
  }
}
