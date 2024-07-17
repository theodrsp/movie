import React, { useEffect, useState } from "react";

import PopularMovieCard from "../../components/card/PopularMovieCard";
import { getPopularMovie } from "../../services/popular-movie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const PopularMovie = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;

  const [loading, setLoading] = useState(false);
  const [PopularMovie, setPopularMovie] = useState<ResponsePopularMovie>();

  useEffect(() => {
    fetchMovie();
  }, [page]);

  const fetchMovie = async () => {
    try {
      setLoading(true);

      const response = await getPopularMovie(page as string);
      setPopularMovie(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePage = () => {
    // setPage((prev) => prev +1);
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  const handlePageminus = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage > 1 ? numPage - 1 : numPage}`);
  };

  return (
    <div className="flex flex-col p-5">
      <label className="text-2xl font-semibold mb-5">Popular Movie</label>
      {!loading ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {PopularMovie?.results.map((item: PopularMovie) => (
            <PopularMovieCard poster_path={item.poster_path} title={item.title} release_date={item.release_date} overview={item.overview} size="w-40" />
          ))}
        </div>
      ) : (
        <div>Loading ... </div>
      )}

      <div className="flex flex-row justify-between">
        <button onClick={handlePageminus} className="bg-green-600 p-2 rounded-sm">
          Back
        </button>
        <button onClick={handlePage} className="bg-green-600 p-2 rounded-sm">
          Next
        </button>
      </div>
    </div>
  );
};

export default PopularMovie;
