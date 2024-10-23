export interface HabitInterface {
  id: number;
  name: string;
  frequency: FrequencyType;
}

export interface ActionInterface {
  type: ActionType;
  habit?: HabitInterface;
  id?: number;
}

export type FrequencyType = "daily" | "weekly" | "monthly";

type ActionType = "added" | "removed" | "changed";
