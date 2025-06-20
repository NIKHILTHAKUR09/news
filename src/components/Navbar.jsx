import React, { useContext, useState } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import { fetchNews } from "../providers/news/NewsActions";
import NewsContext from "../providers/news/NewsContext";

const Navbar = () => {
  const { dark } = useContext(ThemeContext);
  const { dispatch } = useContext(NewsContext);

  const [text, setText] = useState("");

  // Fetch News Function
  const getNews = async (topic) => {
    const data = await fetchNews(topic);

    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getNews(text);
    setText("");
  };

  return (
    <nav
      className={
        dark
          ? "navbar navbar-expand-lg bg-dark shadow"
          : "navbar navbar-expand-lg bg-light shadow"
      }
    >
      <div className="container-fluid">
        <a
          className={dark ? "navbar-brand text-light" : "navbar-brand"}
          href="#"
        >
          Kal-Tak
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={dark ? "nav-link text-light" : "nav-link"}
                aria-current="page"
                href="#"
                onClick={() => getNews("Indian Politics")}
              >
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => getNews("Indian Business")}
                className={dark ? "nav-link text-light" : "nav-link"}
                href="#"
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => getNews("Indian Sports")}
                className={dark ? "nav-link text-light" : "nav-link"}
                href="#"
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => getNews("Bollywood")}
                className={dark ? "nav-link text-light" : "nav-link"}
                href="#"
              >
                Entertainment
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              className={dark ? "btn btn-secondary" : "btn btn-success"}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
