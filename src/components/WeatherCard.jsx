import React, { useContext } from "react";
import ThemeContext from "../providers/theme/ThemeContext";

const WeatherCard = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="col-sm-12 col-md-4">
      <div className={dark ? "card p-3 bg-dark text-light" : "card p-3"}>
        <h3>Today's Weather</h3>
        <span className="d-flex align-items-center justify-content-between">
          <span>
            <h1>29C</h1>
            <h2>Indore</h2>
          </span>
          <span className="text-center">
            <img
              style={{ height: "40px" }}
              src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png"
              alt=""
            />
            <p>Rainy</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
