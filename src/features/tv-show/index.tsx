import { useEffect, useState } from "react";

import TvShowCard from "../../components/Card";
import { getTVShowMovie } from "../../services/tv-show/api-tv-show";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const TVShow = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;

  const [loading, setLoading] = useState(false);
  const [TVShowDate, setTVShowMovie] = useState<ResponseTVShow>();

  useEffect(() => {
    fetchTvShow();
  }, [page]);

  const fetchTvShow = async () => {
    try {
      setLoading(true);

      const response = await getTVShowMovie(page as string);
      setTVShowMovie(response);
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
      <label className="text-2xl font-semibold mb-5">TV Show Movie</label>
      {!loading ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {TVShowDate?.results.map((item: TVShow) => (
            <TvShowCard poster_path={item.poster_path} title={item.name} release_date={item.first_air_date} overview={item.overview} size="w-40" />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <div className="flex flex-row justify-between">
        <button onClick={handlePageminus} className="bg-green-600">
          {" "}
          Back{" "}
        </button>
        <button onClick={handlePage} className="bg-green-600 p-2 rounded-sm">
          Next
        </button>
      </div>
    </div>
  );
};

export default TVShow;
