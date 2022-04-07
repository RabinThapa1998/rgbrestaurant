import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import search from "../assets/search.png";
import { data } from "./data";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  let searchref = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!searchref.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
    setShowSearch(true);
  };

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center h-10 max-w-327 bg-searchbar w-full rounded-full mt-5 pl-4 pr-2 shadow-md border-white border  focus-within:outline-none focus-within:ring focus-within:ring-green-400 "
        tabindex="0"
      >
        <input
          type="search"
          name="search"
          className="w-full bg-searchbar  text-black font-poppins text-sm font-light focus:outline-none "
          placeholder="Search all Foods and Drinks"
          onChange={(event) => handleSearch(event)}
          value={searchItem}
        />
        <div>
          <button className="bg-white rounded-full h-7 w-7 grid grid-rows-1 place-items-center ">
            <img src={search} alt="search" className="m-0 p-0 inline-block" />
          </button>
        </div>
      </div>

      {showSearch && (
        <div className="w-full flex justify-center items-center absolute -bottom-100 z-40 h-auto m-0 ">
          <div
            className="bg-white shadow-lg  rounded w-4/5 flex flex-col h-full overflow-hidden"
            ref={searchref}
          >
            {data
              .filter((val) => {
                if (searchItem == "") {
                  return null;
                } else if (
                  val.itemname.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <button
                    key={key}
                    className="hover:bg-navbar hover:text-white w-full"
                    onClick={() => {
                      setSearchItem(val.itemname);
                      setShowSearch(false);
                    }}
                  >
                    <p className="capitalize font-poppins my-1 text-center">
                      {val.itemname}
                    </p>
                  </button>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
