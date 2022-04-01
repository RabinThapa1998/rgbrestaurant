import { useState } from "react";
import discounted1 from "../assets/discounted1.png";
import discounted2 from "../assets/discounted2.png";
import addtolist from "../assets/addtolist.png";

import IncDecButtons from "./IncDecButtons";

const Discounteditemscardtemplate = () => {
  const [seemore, setSeemore] = useState(false);
  const [seetext, setSeetext] = useState("see more");

  const text =
    "We mix with the integrent that will please your sweet buds and guess what it is healthy and with the survey 90% love this special item.";

  const handleSeemore = () => {
    if (seemore) {
      setSeemore(false);
      setSeetext("see more");
    } else {
      setSeemore(true);
      setSeetext("see less");
    }
  };
  return (
    <div className="flex-col w-163 border rounded-md border-bordercolor py-2  px-4 shadow-sm discounted-card-gradient mx-2">
      <img src={discounted2} alt="discounted item" />
      <p className="text-center font-extrabold text-base">Chicken Fried</p>
      <p className="text-center font-extrabold text-sm  text-discounteditemgreen">
        <i>Rs 150</i>
      </p>
      <p className="text-center font-bold text-xs block text-discounteditemred line-through">
        <i>Rs 200</i>
      </p>
      <p className=" text-left text-secondary break-all text-xs font-normal mt-1">
        {seemore ? text : `${text.substring(0, 60)}`}
        <button
          className="inline-block underline text-seemore"
          onClick={() => handleSeemore()}
        >
          {seetext}.
        </button>
      </p>
      <IncDecButtons color={"green"} />

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
  );
};

export default Discounteditemscardtemplate;
