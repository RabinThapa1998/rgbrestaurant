import HomeNavbar from "../components/Home.Comps.Navbar";
import DiscountedItems from "../components/Home.Comps.Discounteditems";
import SpecialDishes from "../components/Home.Comps.Specialdishes";
import SwiperComponent from "../components/Home.Comps.Swipers";
import SearchBar from "../components/SearchBar";

function Homepage() {
  return (
    <div>
      <HomeNavbar />
      <div className="relative pt-44">
        <SearchBar />
        <SwiperComponent />
        <DiscountedItems />
        <SpecialDishes />
      </div>
    </div>
  );
}

export default Homepage;
