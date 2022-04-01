import Footer from "./Footer";
import HomeNavbar from "./Home.Comps.Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <HomeNavbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
