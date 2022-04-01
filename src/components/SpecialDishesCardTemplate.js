import sd1 from "../assets/sd1.png";
import sd2 from "../assets/sd2.png";
import sd3 from "../assets/sd3.png";
import addtolist from "../assets/addtolist.png";

import IncDecButtons from "./IncDecButtons";

const Specialdishescardtemplate = () => {
  return (
    <div className="card">
      <div className="specialdish-imgsection relative">
        <img src={sd2} alt="special dishes" className="object-cover m-0" />

        <IncDecButtons color={"green"} />
        <div className="absolute bottom-14 w-full left-0">
          <div className="bg-specialdishpricebg px-1 w-70 rounded-tl rounded-br">
            <p className="text-white font-extrabold text-sm justify-center italic">
              Rs 1,450
            </p>
          </div>
        </div>
      </div>
      <div className="specialdish-textsection">
        <p className="text-base font-extrabold mb-1">Special Dahi</p>
        <p className="text-xs font-normal">
          we mix with the integrent that will please your sweet buds and guess
          what it is healthy and with the survey 90% love this special item.
        </p>
        {/* <div className="specialdish-btn-container">
          <button>
            <p className="text-xs font-extrabold">Rs 200</p>
          </button>

          <button>
            <p className="text-xs font-extrabold">Order</p>
          </button>
        </div> */}
        <button className="w-32 border-primary border text-addtolist  my-3 rounded  hover:text-white hover:bg-addtolist transition-colors duration-75 ease-linear py-2 font-nunito font-extrabold text-sm flex justify-around px-4">
          <img
            src={addtolist}
            alt="+"
            style={{ height: "14px", width: "14px" }}
            className="block mr-1"
          />
          <p className="">Add to List</p>
        </button>
      </div>
    </div>
  );
};

export default Specialdishescardtemplate;
