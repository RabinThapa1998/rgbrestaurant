import { motion, AnimatePresence } from "framer-motion";
import IncDecButtons from "./IncDecButtons";
import deletepng from "../assets/delete.png";
import FooterCompsThankyou from "./Footer.Comps.Thankyou";
import yourorders from "../assets/yourorders.png";
import exit from "../assets/exit.png";
import confirmmyorder from "../assets/confirmmyorder.png";

import { useState } from "react";

const FooterCompsYourOrders = ({
  data,
  // yourcart,
  toggleDrawer,
  handleDelete,
}) => {
  const [confirmOrder, setConfirmorder] = useState(false);
  const handleConfirmmyorder = () => {
    if (!confirmOrder) {
      setConfirmorder(true);
    } else {
      setConfirmorder(false);
    }
  };

  return (
    <motion.div className="flex flex-col bg-footerColor rounded-t-2xl  z-40 w-full m-0 p-0">
      <div className="flex flex-row justify-end w-full mt-2 pr-2 mb-3">
        <button className="m-0 p-0" onClick={toggleDrawer("bottom", false)}>
          <img src={exit} alt="exit" />
        </button>
      </div>
      {!confirmOrder && (
        <motion.div
          className="flex flex-col  w-full"
          // initial="collapsed"
          // // animate={yourcart ? "open" : "collapsed"}
          // exit="collapsed"
          // variants={{
          //   open: { opacity: 1, height: "auto" },
          //   collapsed: { opacity: 0, height: 0 },
          // }}
          // transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <img
            src={yourorders}
            alt="background"
            className="my-0 h-5 w-60 inline-block mx-auto"
          />
          <p className="font-bold text-2xl text-center text-white mt-0 mb-5">
            Your Order's
          </p>
          <div className="h-52 overflow-auto w-10/12">
            {data.map((eachitem) => {
              return (
                <div
                  className="flex flex-col justify-center items-center p-2 rounded bg-white shadow-lg my-3 w-full"
                  key={eachitem.id}
                >
                  <div className="flex flex-row justify-between w-full">
                    <p className="font-extrabold text-base">
                      {eachitem.itemname}
                    </p>
                    <button
                      className="m-0"
                      onClick={() => handleDelete(eachitem.id)}
                    >
                      <img
                        src={deletepng}
                        alt="delete"
                        style={{ height: "15px", width: "13px" }}
                      />
                    </button>
                  </div>
                  <div className="flex flex-row justify-between w-full items-center mt-2">
                    <IncDecButtons color={"red"} />
                    {eachitem.size && <div>{eachitem.size}</div>}
                    {eachitem.liter && <div>{eachitem.liter}</div>}
                    <div className="m-0">
                      <p className="text-base font-bold font-poppins">
                        Rs {eachitem.priceperitem}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className=" flex flex-row justify-between bg-white rounded shadow-lg p-3 my-4 w-2/4 mx-auto"
            onClick={() => handleConfirmmyorder()}
          >
            <img
              src={confirmmyorder}
              alt="img"
              style={{ height: "16px", width: "20px" }}
            />
            <span className="text-navbar text-base font-semibold font-poppins">
              Confirm your order
            </span>
          </button>
        </motion.div>
      )}

      {confirmOrder && <FooterCompsThankyou />}
    </motion.div>
  );
};

export default FooterCompsYourOrders;
