import Catogcard from "../components/Menu.Catog.Card";
import MenuCompsNavbar from "../components/Menu.Comps.Navbar";
import { categorydata } from "../components/categorydata";

const MenuHomePage = () => {
  return (
    <div className="relative mx-auto ">
      <MenuCompsNavbar menuId={5577} />
      <div className="relative pt-44 z-0">
        {categorydata.map((data) => {
          return <Catogcard categorydata={data} />;
        })}
      </div>
    </div>
  );
};

export default MenuHomePage;
