import HomeNavbar from "../components/Home.Comps.Navbar";
import DiscountedItems from "../components/Home.Comps.Discounteditems";
import SpecialDishes from "../components/Home.Comps.Specialdishes";
import SwiperComponent from "../components/Home.Comps.Swipers";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

function Homepage() {
  return (
    <>
      {/* <HomeNavbar /> */}
      <div style={{ maxWidth: "425px" }} className="px-3">
        <SearchBar />
        <SwiperComponent />
        <DiscountedItems />
        <SpecialDishes />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Homepage;
