import Specialdishescardtemplate from "./SpecialDishesCardTemplate";

const SpecialDishes = () => {
  return (
    <div className="my-4">
      <p className=" text-2xl font-bold font-poppins ">
        Our <span className="text-primary">Special Dishes:</span>
      </p>
      <div className="flex flex-col">
        <Specialdishescardtemplate />
        <Specialdishescardtemplate />
        <Specialdishescardtemplate />
        <Specialdishescardtemplate />
      </div>
    </div>
  );
};

export default SpecialDishes;
