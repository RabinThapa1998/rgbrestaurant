import Specialdishescardtemplate from "./SpecialDishesCardTemplate";
import { data } from "./data";

const SpecialDishes = () => {
  return (
    <div className="my-4">
      <p className=" text-2xl font-bold font-poppins ">
        Our <span className="text-primary">Special Dishes:</span>
      </p>
      <div className="flex flex-col">
        {data.map((each) => {
          if (each.special) {
            return (
              <Specialdishescardtemplate
                id={each.id}
                itemname={each.itemname}
                price={each.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default SpecialDishes;
