import Discounteditemscardtemplate from "./DiscountedItemsCardTemplate";
import { data } from "./data";
const DiscountedItems = () => {
  return (
    <div className="my-4">
      <p className=" text-2xl font-bold font-poppins">
        Our <span className="text-primary">Offers:</span>
      </p>
      <div className="flex flex-row justify-between  overflow-auto">
        {data.map((each) => {
          return (
            <Discounteditemscardtemplate
              id={each.id}
              itemname={each.itemname}
              price={each.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DiscountedItems;
