import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../providers/theme/ThemeContext";

const ThemeBtn = () => {
  const { dark, dispatch } = useContext(ThemeContext);

  const handleTheme = () => {
    dispatch({
      type: "CHANGE_THEME",
    });
  };

  return (
    <button
      onClick={handleTheme}
      id="themeBtn"
      className={
        dark ? "btn btn-dark text-center" : "btn btn-warning text-center"
      }
    >
      {dark ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeBtn;
