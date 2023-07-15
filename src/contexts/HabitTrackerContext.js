import { createContext, useContext, useReducer, useState } from "react";
import { habits } from "../DB/habits";

const HabitTrackerContext = createContext();

export const initialHabitDetails = {
  id: "",
  name: "",
  repeat: "",
  goal: "",
  timeOfDay: "",
  startDate: "",
};

const initialState = {
  habits: habits,
  habitDetails: initialHabitDetails,
};

const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "ADD_HABIT":
      return { ...state, habits: [...state.habits, payload] };
    case "ADD_HABIT_DETAILS":
      return {
        ...state,
        habitDetails: { ...state.habitDetails, [payload.name]: payload.value },
      };
    case "EDIT_HABIT":
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === payload.id ? { ...payload } : habit
        ),
      };
    case "EDIT_HABIT_DETAILS":
      return { ...state, habitDetails: payload };
    case "RESET_HABIT_DETAILS":
      return { ...state, habitDetails: payload };
    case "MOVE_TO_TRASH":
      return {
        ...state,
        habits: state.habits.filter((habit) => habit.id !== payload.id),
      };
    case "MOVE_TO_ARCHIEVE":
      return {
        ...state,
        habits: state.habits
          .map((habit) =>
            habit.id === payload.id
              ? { ...habit, archieved: !habit.archieved }
              : habit
          )
          .filter((habit) => habit.id !== payload.id),
      };
    default:
      return state;
  }
};

export const HabitTrackerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const [openHabitModal, setOpenHabitModal] = useState(false);
  const [editingHabitId, setEditingHabitId] = useState(null);
  const alreadyArchieved = (habit) => habit.archieved;
  return (
    <HabitTrackerContext.Provider
      value={{
        state,
        dispatch,
        alreadyArchieved,
        openHabitModal,
        setOpenHabitModal,
        editingHabitId,
        setEditingHabitId,
      }}
    >
      {children}
    </HabitTrackerContext.Provider>
  );
};

export const useHabits = () => useContext(HabitTrackerContext);
