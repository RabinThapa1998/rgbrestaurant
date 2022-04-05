import sd1 from "../assets/sd1.png";
import sd2 from "../assets/sd2.png";
import sd3 from "../assets/sd3.png";
import addtolist from "../assets/addtolist.png";

import IncDecButtons from "./IncDecButtons";

const Specialdishescardtemplate = ({ id, itemname, price }) => {
  return (
    <div className="bg-specialdishbg p-5  w-full border-b border-bordercolor">
      <div className="flex  flex-row justify-around items-center">
        <div className="specialdish-imgsection relative">
          <img src={sd2} alt="special dishes" className="object-cover m-0" />
          <div className="absolute bottom-0 w-full left-0">
            <div className="bg-specialdishpricebg px-1 w-70 rounded-tl rounded-br">
              <p className="text-white font-extrabold text-sm justify-center italic">
                Rs.{price}
              </p>
            </div>
          </div>
        </div>
        <div className="specialdish-textsection">
          <p className="text-base font-extrabold mb-1 capitalize">{itemname}</p>
          <p className="text-xs font-normal">
            we mix with the integrent that will please your sweet buds and guess
            what it is healthy and with the survey 90% love this special item.
          </p>
        </div>
      </div>
      <IncDecButtons
        color={"green"}
        id={id}
        position={"flex-row pl-6 pr-11 justify-between items-start"}
      />
    </div>
  );
};

export default Specialdishescardtemplate;
