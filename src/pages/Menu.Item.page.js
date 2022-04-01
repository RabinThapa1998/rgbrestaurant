import { useParams } from "react-router-dom";
import MenuItemPageCompsNavs from "../components/MenuItemPage.Comps.Navs";

const MenuItemPage = () => {
  let { menuId } = useParams();
  return (
    <div>
      <MenuItemPageCompsNavs />
    </div>
  );
};

export default MenuItemPage;
