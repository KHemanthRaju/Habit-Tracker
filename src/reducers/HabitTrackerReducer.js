export const initialState = {
  habitsData: [],
  archivedHabits: [],
};

export const habitsTrackerReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NEW_HABIT":
      return { ...state, habitsData: [...state.habitsData, payload] };
    case "UPDATE_HABIT_DETAILS":
      return { ...state, habitsData: [...payload] };
    case "ADD_NEW_ARCHIVED_HABIT":
      return { ...state, archivedHabits: [...state.archivedHabits, payload] };
    case "UPDATE_ARCHIVED_HABIT_DETAILS":
      return { ...state, archivedHabits: [...payload] };
    default:
      return state;
  }
};
