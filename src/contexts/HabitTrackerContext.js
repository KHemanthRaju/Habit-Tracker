import { createContext, useContext } from "react";

const HabitTrackerContext = createContext();

export const HabitTrackerProvider = ({ children }) => {
  return (
    <HabitTrackerContext.Provider>{children}</HabitTrackerContext.Provider>
  );
};

export const useHabits = () => useContext(HabitTrackerContext);
