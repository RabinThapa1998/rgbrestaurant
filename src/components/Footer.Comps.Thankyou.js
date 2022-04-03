import exit from "../assets/exit.png";
import askforbill from "../assets/askforbill.png";
import exploremenu from "../assets/exploremenu.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const FooterCompsThankyou = () => {
  const thankyouData = [
    { sn: 1, orders: "Chicken Momo", qty: "1plate", price: "Rs 500" },
    { sn: 1, orders: "Lemon Vodka", qty: "60ml", price: "Rs 750" },
    { sn: 1, orders: "Pasta", qty: "1bowl", price: "Rs 280" },
    { sn: 1, orders: "Chicken Momo", qty: "1plate", price: "Rs 500" },
    { sn: 1, orders: "Chicken Momo", qty: "1plate", price: "Rs 500" },
    { sn: 1, orders: "Chicken Momo", qty: "1plate", price: "Rs 500" },
    { sn: 1, orders: "Chicken Momo", qty: "1plate", price: "Rs 500" },
    { sn: 1, orders: "Chicken Momo", qty: "1plate", price: "Rs 500" },
  ];
  return (
    <motion.div
      className="bg-navbar text-white w-full p-2"
      // initial="collapsed"
      // //   animate={yourcart ? "open" : "collapsed"}
      // animate="open"
      // exit="collapsed"
      // variants={{
      //   open: { opacity: 1, height: "auto" },
      //   collapsed: { opacity: 0, height: 0 },
      // }}
      // transition={{
      //   duration: 0.8,
      //   ease: [0.04, 0.62, 0.23, 0.98],
      // }}
    >
      <p className="text-2xl  font-bold text-center ">Thank you</p>
      <table className="table-auto border-collapse  w-full mt-6">
        <thead className=" border-white border-t border-b">
          <tr>
            <th>S.N.</th>
            <th className="text-left ">Orders</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Price</th>
          </tr>
        </thead>
        <tbody className="border-b border-white">
          {thankyouData.map((eachitem) => {
            return (
              <tr>
                <td className="text-center">{eachitem.sn}</td>
                <td>{eachitem.orders}</td>
                <td>{eachitem.qty}</td>
                <td>{eachitem.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="font-poppins flex justify-between mt-5 mb-16">
        <Link to="/menu/2">
          <a className="border rounded flex justify-between items-center py-3 px-1">
            <img
              src={exploremenu}
              alt="exploremenu"
              className="mr-2"
              style={{ width: "21px", height: "21px" }}
            />
            <span className="font-extrabold text-xs">Explore Menu</span>
          </a>
        </Link>
        <button className="rounded bg-white flex flex-row-reverse justify-between items-center py-3 px-1 shadow-lg">
          <img
            src={askforbill}
            alt="askforbill"
            className="ml-2"
            style={{ width: "8px", height: "13px" }}
          />
          <span className="text-base font-bold text-navbar">
            Ask for the Bill
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default FooterCompsThankyou;
