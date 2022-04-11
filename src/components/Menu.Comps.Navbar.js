import React from "react";
import search from "../assets/search.png";
import backarrow from "../assets/menunavbarbackarrow.png";
import { NavLink } from "react-router-dom";
import { categorydata } from "./categorydata";
import { useNavigate } from "react-router-dom";

const MenuCompsNavbar = ({ menuId }) => {
  const navigate = useNavigate();
  let categoryname;
  if (menuId != 5577) {
    const category = categorydata.find((each) => each.categoryid == menuId);
    categoryname = category.categoryname;
  } else {
    categoryname = "menu";
  }

  return (
    <div
      className="p-0 m-0  fixed top-0 z-50 -mx-3 w-full"
      style={{ maxWidth: "425px" }}
    >
      <nav className="menubackgroundimage pt-5 px-4 pb-4 rounded-b-2xl m-0 text-white mx-auto z-50 relative">
        <div className="flex justify-between items-center h-10 max-w-327 bg-transparent w-full rounded-full mt-5 mb-5 pl-4 pr-2 shadow-md border-white border">
          <input
            type="search"
            name="search"
            className="w-full bg-transparent text-white font-poppins text-sm font-light focus:outline-none menupagesearchbar"
            placeholder="Search all Foods and Drinks"
          />
          <div>
            <button className="bg-white rounded-full h-7 w-7 grid grid-rows-1 place-items-center ">
              <img src={search} alt="search" className="m-0 p-0 inline-block" />
            </button>
          </div>
        </div>
        <div className="flex justify-start mt-4  items-center">
          <button
            onClick={() => {
              navigate(-1);
            }}
            to="/"
            className="bg-primary h-9 w-9 rounded  grid place-items-center m-0"
          >
            <img src={backarrow} alt="back" className="m-0 p-0" />
          </button>
          <p className="font-poppins font-bold text-4xl text-left ml-12 capitalize">
            {categoryname}
          </p>
        </div>
      </nav>
    </div>
  );
};

export default MenuCompsNavbar;
