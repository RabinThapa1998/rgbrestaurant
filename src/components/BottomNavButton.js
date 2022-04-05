import { useState } from "react";
import FooterCompsThankyou from "./Footer.Comps.Thankyou";

const BottomNavButton = ({ toggleDrawer }) => {
  const [showViewBill, setShowViewBill] = useState(false);
  const handleViewBill = () => {
    setShowViewBill(true);
  };
  return (
    //bg-footer
    <div className="w-full fixed bottom-0 ">
      <footer
        className="mx-auto z-50  bg-footer  h-full "
        style={{ maxWidth: "425px", maxHeight: "76px" }}
      >
        {showViewBill ? (
          <div className="flex justify-between items-center w-full mx-auto h-full py-3 px-4">
            <button
              className="bg-yourbill px-9 py-2 rounded "
              //   onClick={() => handleyourCartClick()}
              onClick={toggleDrawer("bottom", true)}
            >
              <span className="font-poppins font-bold text-white text-xl">
                Your Bill
              </span>
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center w-full mx-auto h-full py-3 px-4">
            <p className="font-poppins font-bold text-2xl">Rs 1,200/-</p>
            <div className="m-0">
              <button
                className="bg-navbar px-9 py-2 rounded "
                //   onClick={() => handleyourCartClick()}
                onClick={toggleDrawer("bottom", true)}
              >
                <span className="font-poppins font-bold text-white text-xl">
                  Your Cart
                </span>
              </button>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
};

export default BottomNavButton;
