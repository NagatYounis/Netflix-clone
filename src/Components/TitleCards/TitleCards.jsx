import React, { useEffect, useRef, useState } from "react";
import "./title.css";
import { Link } from "react-router";
const TitleCards = ({ title, category }) => {
  const cardRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWNkNDg2NWEzNTkzODY4NTUzNzM5OGFkMjE5YjlmZCIsIm5iZiI6MTc2MzAzNzgxMy43NTUsInN1YiI6IjY5MTVkMjc1YzVjNWZhZmYzYWEwZGQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.56V3aYxfvKShzA1SbOsfukFCdrwH6GIdUNl_pVy_zuA",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    // ✅ غيرنا الرابط هنا
    fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setApiData(data.results || []);
      })
      .catch((err) => console.error(err));

    const ref = cardRef.current;
    ref.addEventListener("wheel", handleWheel);

    return () => {
      ref.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => (
        <Link to={`/player/${card.id}`}> <div className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.title}
            />
            <p>{card.original_title}</p>
          </div>
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
