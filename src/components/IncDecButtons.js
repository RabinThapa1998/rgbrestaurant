import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import minus2 from "../assets/minus2.png";
import { useState, useEffect } from "react";
import addtolist from "../assets/addtolist.png";
import incdecReducer, { counterAction } from "../reducers/CounterReducer";
import { useDispatch, useSelector } from "react-redux";
import { showPaymentAction } from "../reducers/BottomNavReducer";

const IncDecButtons = ({ color, id, position }) => {
  const [count, setCount] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const resultcounts = useSelector((state) => state.counter.value);
  const updatedcount = resultcounts.find((res) => res.id == id);
  const dispatch = useDispatch();

  // const incCount = () => {
  //   if (!updatedcount) {
  //     setCount(count + 1);
  //   } else {
  //     setCount(count + 1);
  //   }
  // };
  // const decCount = () => {
  //   if (count > 0) {
  //     if (!updatedcount) {
  //       setCount(count - 1);
  //     } else {
  //       setCount(count - 1);
  //     }
  //   }
  // };
  const incCount = () => {
    if (!updatedcount) {
      setVisibleCount(visibleCount + 1);
      setCount(visibleCount + 1);
    } else {
      setVisibleCount(visibleCount + 1);
      setCount(visibleCount + updatedcount.value + 1);
    }
  };
  const decCount = () => {
    if (visibleCount > 0) {
      if (!updatedcount) {
        setVisibleCount(visibleCount - 1);
        setCount(visibleCount - 1);
      } else {
        setVisibleCount(visibleCount - 1);
        setCount(visibleCount - 1 + updatedcount.value);
      }
    }
  };

  // useEffect(() => {
  //   if (updatedcount) setCount(updatedcount.value);
  // }, [updatedcount]);

  if (color == "green") {
    return (
      <div className={`flex ${position} w-full`}>
        <div className="specialdish-incrementbtn-container my-2 mx-0 px-2">
          <button
            className="specialdish-incrementbtn decrement-gradient-green"
            onClick={() => decCount()}
          >
            <img src={minus} alt="minus" />
          </button>
          <p className="specialdish-incrementbtn-text">{visibleCount}</p>
          <button
            className="specialdish-incrementbtn  increment-gradient-green "
            onClick={() => incCount()}
          >
            <img src={plus} alt="plus" />
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(counterAction({ id, count }));
            setVisibleCount(0);
            dispatch(showPaymentAction(false));
          }}
          className="addtolist"
        >
          <img
            src={addtolist}
            alt="+"
            style={{ height: "14px", width: "14px" }}
            className="block mr-1"
          />
          <p className="">Add to List</p>
        </button>
      </div>
    );
  }
  if (color == "red") {
    return (
      <div className="specialdish-incrementbtn-container  mx-0">
        <button
          className="specialdish-incrementbtn decrement-gradient-red"
          onClick={() => decCount()}
        >
          <img src={minus2} alt="minus" />
        </button>
        <p className="specialdish-incrementbtn-text">{count}</p>
        <button
          className="specialdish-incrementbtn  increment-gradient-red "
          onClick={() => incCount()}
        >
          <img src={plus} alt="plus" />
        </button>
      </div>
    );
  }
};

export default IncDecButtons;
