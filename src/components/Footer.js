import { useEffect, useState } from "react";
import FooterCompsYourOrders from "./Footer.Comps.YourOrders";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [yourcart, setYourcart] = useState(false);
  function handleyourCartClick() {
    yourcart ? setYourcart(false) : setYourcart(true);
  }
  const [footerdata, setFooterData] = useState([
    { id: 1, itemname: "Chicken Ham-Burger", priceperitem: 500, noofitems: 1 },
    {
      id: 2,
      itemname: "Veg-pizza",
      priceperitem: 500,
      noofitems: 1,
      size: "small",
    },
    { id: 3, itemname: "Buff Steam Momo", priceperitem: 500, noofitems: 1 },
    {
      id: 4,
      itemname: "Gurkhas and Guns",
      priceperitem: 500,
      noofitems: 1,
      liter: "60ml",
    },
    { id: 5, itemname: "French Fries", priceperitem: 500, noofitems: 1 },
  ]);

  const handleDelete = (deleteId) => {
    const data = footerdata.filter((eachdata) => {
      return eachdata.id != deleteId;
    });
    setFooterData(data);
    console.log(data);
  };

  return (
    <>
      <AnimatePresence exit={{ opacity: 0 }}>
        {yourcart && (
          <FooterCompsYourOrders
            data={footerdata}
            yourcart={yourcart}
            handleyourCartClick={handleyourCartClick}
            handleDelete={handleDelete}
          />
        )}
      </AnimatePresence>
      <div className="fixed bottom-0 w-full ">
        <footer
          className="mx-auto z-50 w-full px-4 bg-footer h-full sticky bottom-0"
          style={{ maxWidth: "425px", maxHeight: "76px" }}
        >
          {!yourcart && (
            <div className="flex justify-between items-center w-full mx-auto h-full py-3">
              <p className="font-poppins font-bold text-2xl">Rs 1,200/-</p>
              <div className="m-0">
                <button
                  className="bg-navbar px-9 py-2 rounded "
                  onClick={() => handleyourCartClick()}
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
    </>
  );
};

export default Footer;
