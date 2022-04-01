import Discounteditemscardtemplate from "./DiscountedItemsCardTemplate";

const DiscountedItems = () => {
  return (
    <div className="my-4">
      <p className=" text-2xl font-bold font-poppins">
        Our <span className="text-primary">Offers:</span>
      </p>
      <div className="flex flex-row justify-between  overflow-auto">
        <Discounteditemscardtemplate />
        <Discounteditemscardtemplate />
        <Discounteditemscardtemplate />
      </div>
    </div>
  );
};

export default DiscountedItems;
