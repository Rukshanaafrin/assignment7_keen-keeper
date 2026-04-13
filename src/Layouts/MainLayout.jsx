import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;