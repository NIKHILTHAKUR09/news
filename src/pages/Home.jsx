import React, {  useEffect } from "react";
import Slider from "../components/Slider";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../providers/news/NewsActions";
import { useContext } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import NewsContext from "../providers/news/NewsContext";

const Home = () => {
  const { dark } = useContext(ThemeContext);
  const { allNews, dispatch } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);

    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    getNews("Indore");
  }, []);

  if (allNews.length === 0) {
    return (
      <div className="container p-5 d-flex align-items-center justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Slider />
      <div className="container my-3">
        <h1
          className={dark ? "text-center my-3 text-dark" : "text-center my-3"}
        >
          Top News
        </h1>

        <div className="row ">
         
          <div className=" flex ">
            {allNews.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
