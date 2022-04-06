import BottomNav from "../components/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import PaymentCompsNavbar from "../components/Payment.Comps.Navbar";
import { useNavigate } from "react-router-dom";

const Paymentpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { finalBill } = useSelector((state) => state.counter);
  console.log(finalBill);
  return (
    <div>
      <PaymentCompsNavbar />
      <p className="text-center font-semibold text-2xl pt-36">Your Bill</p>
      <table className="table-auto border-collapse  w-full mt-6 text-black">
        <thead className=" border-black border-t border-b">
          <tr>
            <th>S.N.</th>
            <th className="text-left ">Orders</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Price</th>
          </tr>
        </thead>
        <tbody className="border-b border-black">
          {finalBill.map((eachitem, i) => {
            if (eachitem.id != 0) {
              return (
                <tr key={eachitem.id}>
                  <td className="text-center">{i}</td>
                  <td>{eachitem.itemname}</td>
                  <td>{eachitem.value}</td>
                  <td>{eachitem.price}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Paymentpage;
