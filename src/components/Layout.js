import HomeNavbar from "./Home.Comps.Navbar";
import MenuCompsNavbar from "./Menu.Comps.Navbar";
import { useParams } from "react-router-dom";
import BottomNav from "./BottomNav";
const Layout = ({ children }) => {
  return (
    <div className="p-0 m-0 relative w-full">
      <div
        style={{ maxWidth: "425px" }}
        className="px-3 overflow-x-hidden w-full pb-20 mx-auto"
      >
        {children}
      </div>
      <BottomNav />
    </div>
  );
};

export default Layout;
