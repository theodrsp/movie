import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  // untuk mengambil value path pada url yang sudah didefinisikan pada routes
  const { pathname } = useLocation();

  // untuk mengambil value token dari localstorage menggunakan getItem
  const token = localStorage.getItem("token");

  // definisikan halaman apa saja yang ingin di protected
  const tokenProtected = ["/", "/detail", "/movie", "/tv-show"];
  // definisikan halaman apa saja yang ingin di public
  const publicProtected = ["/login"];

  if (tokenProtected.includes(pathname)) {
    if (!token) {
      console.log("tes");
      return <Navigate to={"/login"} />;
    }
  }

  if (publicProtected.includes(pathname)) {
    if (token) {
      return <Navigate to={"/"} />;
    }
  }
  return <Outlet />;
};

export default ProtectedRoutes;
