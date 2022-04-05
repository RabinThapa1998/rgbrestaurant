import { useState } from "react";
import discounted1 from "../assets/discounted1.png";
import discounted2 from "../assets/discounted2.png";
import addtolist from "../assets/addtolist.png";
import IncDecButtons from "./IncDecButtons";

const Discounteditemscardtemplate = ({ id, itemname, price }) => {
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
      <p className="text-center font-extrabold text-base capitalize">
        {itemname}
      </p>
      <p className="text-center font-extrabold text-sm  text-discounteditemgreen">
        <i>{price}</i>
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
      <IncDecButtons color={"green"} id={id} position={"flex-col"} />
    </div>
  );
};

export default Discounteditemscardtemplate;
