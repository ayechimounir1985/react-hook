import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ movies }) => {
  const { idmovie } = useParams();
  const foundmovie = movies.find((el) => el.id === idmovie);
  console.log(foundmovie);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "20% 20% 20% 20% 20%",
        gridTemplateRows: "20% 20% 20% 20% 20%",
        gap: "20px",
        marginLeft: "60px",
        marginRight: "60px",
      }}
    >
      <div style={{ gap: "20px" }}>
        <h1 style={{ gridArea: "1/1/2/1" }}>{foundmovie.title}</h1>
        <img
          style={{ height: "409px", width: "399px", gridArea: "2/1/4/1" }}
          src={foundmovie.posterUrl}
          alt="movie"
        ></img>
        <p style={{ gridArea: "4/1/5/2",fontWeight:'bold' }}>{foundmovie.description}</p>
      </div>

      <iframe
        style={{ gridArea: "1/3/3/6", width: "700px", height: "600px" }}
        src={foundmovie.trailerUrl}
      ></iframe>
    </div>
  );
};

export default Details;