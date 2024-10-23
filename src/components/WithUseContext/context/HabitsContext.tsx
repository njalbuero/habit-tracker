import { createContext, Dispatch, useReducer } from "react";

import { ActionInterface, HabitInterface } from "../../types";

export const HabitsContext = createContext<HabitInterface[]>([]);
export const HabitsDispatchContext = createContext<Dispatch<ActionInterface>>(
  () => {}
);

export const HabitsProvider= ({ children }: { children: React.ReactNode }) => {
  const [habits, dispatch] = useReducer(habitsReducer, []);

  return (
    <HabitsContext.Provider value={habits}>
      <HabitsDispatchContext.Provider value={dispatch}>
        {children}
      </HabitsDispatchContext.Provider>
    </HabitsContext.Provider>
  );
};

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
