import React from "react";
import IncDecButtons from "./IncDecButtons";
import addtolist from "../assets/addtolist.png";
import SelectElementMUI from "./SelectElementMUI";
const MenuItemPageCompsitems = ({ itemtype }) => {
  console.log(itemtype.itemname);
  return (
    <div className="bg-white drop-shadow-lg rounded relative p-2 overflow-hidden my-5 mx-5">
      <div className="flex relative justify-end font-nunito text-sm font-bold">
        <SelectElementMUI />
      </div>
      <p className="font-nunito font-extrabold text-lg">{itemtype.itemname}</p>
      <div className="flex justify-between align-baseline ">
        <IncDecButtons color={"red"} id={itemtype.typeid} />
      </div>
      <div className="absolute top-0 left-0 bg-moneygreen rounded-tl rounded-br px-1">
        <p className="text-justify italic font-extrabold text-white">Rs 150</p>
      </div>
    </div>
  );
};

export default MenuItemPageCompsitems;
