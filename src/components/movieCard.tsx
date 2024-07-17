import { useState } from "react";

interface Props {
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  size?: string;
}
const movieCard = (props: Props) => {
  const { title, poster_path, release_date, overview, size } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showOverview, setShowOverview] = useState(false);

  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  return (
    <div className={`flex flex-col ${size} bg-slate-100 rounded-2xl p-3`}>
      <img src={`https://image.tmdb.org/t/p/w780${poster_path}`} onClick={toggleOverview} />
      <label className="text-center font-semibold">{title}</label>
      <p className="text-center">{release_date}</p>

      {showOverview && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-4 max-w-md overflow-y-auto">
            <h2 className="text-lg font-semibold mb-2 text-white">Overview</h2>
            <p className="text-white">{overview}</p>
            <button className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-red-700" onClick={toggleOverview}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default movieCard;
