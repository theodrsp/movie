import { useEffect, useState } from "react";

import TvShowCard from "../../components/Card";
import { getTopRatedMovie } from "../../services";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const Home = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("") !== null ? query.get("page") : 1) as string;

  // const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [TopRatedDate, setTopRatedMovie] = useState<ResponseMovie>();

  useEffect(() => {
    fetchMovie();
  }, [page]);

  const fetchMovie = async () => {
    try {
      setLoading(true);

      const response = await getTopRatedMovie(page as string);

      setTopRatedMovie(response);
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
      <label className="text-2xl font-semibold mb-5">Top Rated Movie</label>
      {!loading ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {TopRatedDate?.results.map((item: Movie) => (
            <TvShowCard poster_path={item.poster_path} title={item.title} release_date={item.release_date} overview={item.overview} size="w-40" />
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

export default Home;
