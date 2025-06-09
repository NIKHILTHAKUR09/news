import { useReducer } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialState = {
    dark: true,
  };

  // Reducer Function

  const ThemeReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        return {
          dark: state.dark ? false : true,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
