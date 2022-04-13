import React from "react";
import search from "../assets/search.png";
import backarrow from "../assets/menunavbarbackarrow.png";
import { NavLink } from "react-router-dom";
import { categorydata } from "./categorydata";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bg from "../assets/menupagebg.png";

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
      className="p-0 m-0  fixed top-0 -mx-3 w-full overflow-hidden rounded-b-2xl z-50 "
      style={{ maxWidth: "425px" }}
    >
      <nav className=" pt-5 px-4 pb-4 m-0 text-white w-full relative z-50 ">
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
      <div className="  w-full h-full p-0  absolute top-0  z-10 menubggradtrick">
        <LazyLoadImage
          // src={
          //   "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275"
          // }
          src={process.env.PUBLIC_URL + "/menupagebg.png"}
          alt="back"
          effect="blur"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default MenuCompsNavbar;
