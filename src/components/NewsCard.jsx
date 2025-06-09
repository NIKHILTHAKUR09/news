import React, { useContext } from "react";
import ThemeContext from "../providers/theme/ThemeContext";

const NewsCard = ({ news }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "card mb-3 bg-dark text-light" : "card mb-3"}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={news.urlToImage}
            className="img-fluid rounded-start"
            style={{ height: "250px", objectFit: "cover" }}
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>
            <p className="card-text">
              <small className="text-secondary">
                {new Date(news.publishedAt).toLocaleDateString("en-IN")}
              </small>
              <a
                href={news.url}
                target="_blank"
                className={
                  dark
                    ? "btn btn-sm btn-secondary float-end"
                    : "btn btn-sm btn-success float-end"
                }
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
