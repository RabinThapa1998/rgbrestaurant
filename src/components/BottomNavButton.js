import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BottomNavButton = ({ toggleDrawer, numberofItems }) => {
  const navigate = useNavigate();
  const { showPayment } = useSelector((state) => state.payment);

  return (
    //bg-footer
    <div className="w-full fixed bottom-0 ">
      <footer
        className="mx-auto z-50  bg-footer  h-full "
        style={{ maxWidth: "425px", maxHeight: "76px" }}
      >
        <div className="flex justify-around w-full mx-auto h-full py-3 px-4">
          <div className="m-0 w-2/4">
            {showPayment && (
              <button
                className="bg-yourbill px-9 py-2 rounded self-start"
                onClick={() => navigate("payment")}
              >
                <span className="font-poppins font-bold text-white text-xl">
                  Your Bill
                </span>
              </button>
            )}
          </div>
          <button
            className="bg-navbar px-9 py-2 rounded relative"
            onClick={toggleDrawer("bottom", true)}
          >
            <span className="font-poppins font-bold text-white text-xl">
              Your Cart
            </span>
            <div className="bg-moneygreen h-5 w-5 rounded-full border border-white grid place-items-center p-0 absolute -top-2 right-3">
              <p className="text-xs text-white font-poppins ">
                {numberofItems}
              </p>
            </div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default BottomNavButton;
