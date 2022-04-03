import { useParams } from "react-router-dom";
import MenuCompsNavbar from "../components/Menu.Comps.Navbar";
import MenuItemPageCompsNavs from "../components/MenuItemPage.Comps.Navs";

const MenuItemPage = () => {
  let { menuId } = useParams();
  console.log("menuId", menuId);
  return (
    <div className="relative">
      <MenuCompsNavbar />
      <div className="pt-44 pb-20 relative">
        <MenuItemPageCompsNavs />
      </div>
    </div>
  );
};

export default MenuItemPage;
