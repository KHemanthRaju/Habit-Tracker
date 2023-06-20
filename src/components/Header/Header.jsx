import { NavLink } from "react-router-dom";

import "../Header/Header.css";

export const Header = () => {
  return (
    <nav className="navigation">
      <NavLink className={"link"} to="/">
        📝 Habits
      </NavLink>
      <NavLink className={"link"} to="/archives">
        🔒 Archived Habits
      </NavLink>
    </nav>
  );
};

export default Header;
