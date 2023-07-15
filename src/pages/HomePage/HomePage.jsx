import { useNavigate } from "react-router-dom";
import {
  initialHabitDetails,
  useHabits,
} from "../../contexts/HabitTrackerContext";
import { IoMdAddCircle } from "react-icons/io";
export const HomePage = () => {
  const navigate = useNavigate();
  const { state, dispatch, openHabitModal, setOpenHabitModal } = useHabits();

  return (
    <>
      <div className="home">
        <h1 className="title">Home</h1>
        <hr />
        <div className="habit-titles">
          <div className="habit-title">
            <div className="action-icons add">
              <IoMdAddCircle
                title="Create habit"
                onClick={() => {
                  setOpenHabitModal((prev) => !prev);
                  dispatch({
                    type: "ADD_HABIT_DETAILS",
                    payload: initialHabitDetails,
                  });
                }}
              />
            </div>
          </div>
          {state?.habits?.map((habit) => (
            <h2>{habit.name}</h2>
          ))}
        </div>
        <div>
          <button
            className="archieve-page-btn"
            onClick={() => navigate("/archieves")}
          >
            Go to Archives
          </button>
        </div>
      </div>
    </>
  );
};
