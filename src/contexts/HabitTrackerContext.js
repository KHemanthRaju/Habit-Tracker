import { createContext, useContext } from "react";

const HabitTrackerContext = createContext();

export const initialHabitDetails = {
  id: "",
  name: "",
  repeat: "",
  goal: "",
  timeOfDay: "",
  startDate: "",
};

export const HabitTrackerProvider = ({ children }) => {
  return (
    <HabitTrackerContext.Provider>{children}</HabitTrackerContext.Provider>
  );
};

export const useHabits = () => useContext(HabitTrackerContext);
