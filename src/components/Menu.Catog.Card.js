import burgerm from "../assets/pizza.png";
import darow from "../assets/darow.png";
import { NavLink } from "react-router-dom";

const Catogcard = ({ categorydata }) => {
  return (
    <NavLink to={`${categorydata.categoryid}`}>
      <div
        className="flex justify-start m-5 rounded-lg bg-white drop-shadow-xl overflow-hidden relative my-5"
        style={{ height: "68px" }}
      >
        <div className="absolute top-0 flex justify-start border-0 m-0 bg-red-600 rounded-lg w-9 h-full">
          <img
            src={burgerm}
            alt="burgericon"
            className=" absolute left-3  object-contain h-full w-auto my-auto"
            style={{ width: "68px", height: "68px" }}
          />
        </div>
        <p className=" font-nunito font-extrabold text-lg  my-auto text-center w-9/12 ml-2">
          {categorydata.categoryname}
        </p>
        <div className=" h-full absolute right-2 flex justify-center items-center">
          <img src={darow} alt="arrowicon" className="h-5 w-3" />
        </div>
      </div>
    </NavLink>
  );
};

export default Catogcard;
