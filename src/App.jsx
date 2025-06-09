import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ThemeBtn from "./components/ThemeBtn";
import { NewsProvider } from "./providers/news/NewsContext";
import { useContext } from "react";
import ThemeContext from "./providers/theme/ThemeContext";

const App = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <NewsProvider>
      <Navbar />
      <div
        id="container"
        className={
          dark ? "container-fluid bg-secondary text-light" : "container-fluid"
        }
      >
        <Home />
        <ThemeBtn />
      </div>
    </NewsProvider>
  );
};

export default App;
