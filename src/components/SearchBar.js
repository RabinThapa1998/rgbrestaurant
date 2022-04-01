import search from "../assets/search.png";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center h-10 max-w-327 bg-searchbar w-full rounded-full mt-5 pl-4 pr-2 shadow-md border-white border">
      <input
        type="search"
        name="search"
        className="w-full bg-transparent text-searchbartext font-poppins text-sm font-light focus:outline-none"
        placeholder="Search all Foods and Drinks"
      />
      <div>
        <button className="bg-white rounded-full h-7 w-7 grid grid-rows-1 place-items-center ">
          <img src={search} alt="search" className="m-0 p-0 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
