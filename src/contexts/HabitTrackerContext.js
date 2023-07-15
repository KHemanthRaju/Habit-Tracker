import { createContext, useReducer } from "react";
import {
  habitsTrackerReducer,
  initialState,
} from "../reducers/HabitTrackerReducer";
import { toast } from "react-toastify";

const HabitTrackerContext = createContext();

export const HabitTrackerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(habitsTrackerReducer, initialState);

  const addNewHabit = (habit) => {
    dispatch({ type: "ADD_NEW_HABIT", payload: habit });
    toast.success("New habit added");
  };

  const updateHabitDetails = (updatedHabit) => {
    const newHabitDetails = state.habitsData.map((habit) =>
      habit.id === updatedHabit.id ? { ...habit, ...updatedHabit } : habit
    );
    dispatch({ type: "UPDATE_HABIT_DETAILS", payload: newHabitDetails });
    toast.success("Habit updated!");
  };

  return (
    <HabitTrackerContext.Provider>{children}</HabitTrackerContext.Provider>
  );
};
