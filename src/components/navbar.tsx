import { Link, useNavigate } from "react-router-dom";

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    <div className="flex flex-row w-full justify-between px-5 py-4 shadow-md bg-gray-800 text-white">
      <h2 className="text-large text-regal-blue">Name</h2>
      <div className="flex flex-row gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/movie"}>Movie</Link>
        <Link to={"/tv-show"}>TV Show</Link>
        <div onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
};

export default navbar;
