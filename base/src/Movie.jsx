import React, { useEffect, useState } from "react";
import axios from "axios";

const Movie = () => {
  const [data, setData] = useState([]);
  const APIkey = "http://www.omdbapi.com/?i=tt3896198&apikey=9b620cd1";

  const getMovieData = async () => {
    try {
      const res = await axios.get(APIkey);
      console.log(res.data.Title);
      setData(res.data.Title);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <ul>
        {data.map((curElem) => (
          <li key={data.imdbId}></li>
        ))}
      </ul>
    </>
  );
};

export default Movie;
