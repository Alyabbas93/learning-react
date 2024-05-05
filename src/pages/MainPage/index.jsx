import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Box = () => {
  const [articles, setArticles] = useState([]);
  const [boxes, setBoxes] = useState([[], [], []]); // Initialize boxes state

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("https://api.lumiplace.io/app.v1/api/getArticles");
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="main">
      {articles.map((article, index) => (
        <div className="child" key={index}>
          <h2>{article.title}</h2>
          <img src={article.image} alt={article.title} />
          {/* Add other details here if needed */}
        </div>
      ))}
    </div>
  );
};

export default Box;
