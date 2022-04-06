import exit from "../assets/exit.png";
import askforbill from "../assets/askforbill.png";
import exploremenu from "../assets/exploremenu.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { showPaymentAction } from "../reducers/BottomNavReducer";

const FooterCompsThankyou = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { finalBill } = useSelector((state) => state.counter);
  console.log("finalBill", finalBill);
  return (
    <div className="bg-navbar text-white w-full p-2">
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
          {finalBill.map((eachitem, i) => {
            return (
              <tr key={eachitem.id}>
                <td className="text-center">{i + 1}</td>
                <td>{eachitem.itemname}</td>
                <td>{eachitem.value}</td>
                <td>{eachitem.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="font-poppins flex justify-between mt-5 mb-16">
        <Link to="/menu/2" className="m-0 p-0">
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
        <button
          className="rounded bg-white flex flex-row-reverse justify-between items-center py-3 px-1 shadow-lg"
          onClick={() => {
            dispatch(showPaymentAction(true));
            navigate("payment");
          }}
        >
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
    </div>
  );
};

export default FooterCompsThankyou;
