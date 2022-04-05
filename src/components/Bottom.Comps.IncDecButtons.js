import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import minus2 from "../assets/minus2.png";
import { useState, useEffect } from "react";
import incdecReducer, { counterAction } from "../reducers/CounterReducer";
import { useDispatch, useSelector } from "react-redux";

const BottomCompsIncDecButtons = ({ color, id }) => {
  const resultcounts = useSelector((state) => state.counter.value);
  const updatedcount = resultcounts.find((res) => res.id == id);

  const [count, setCount] = useState(updatedcount.value);
  const dispatch = useDispatch();

  const incCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    if (count > 0) setCount(count - 1);
  };

  useEffect(() => {
    console.log(count);
    dispatch(counterAction({ id, count }));
  }, [count]);

  if (color == "green") {
    return (
      <div className="specialdish-incrementbtn-container my-2 mx-0 px-2">
        <button
          className="specialdish-incrementbtn decrement-gradient-green"
          onClick={() => decCount()}
        >
          <img src={minus} alt="minus" />
        </button>
        <p className="specialdish-incrementbtn-text">{count}</p>
        <button
          className="specialdish-incrementbtn  increment-gradient-green "
          onClick={() => incCount()}
        >
          <img src={plus} alt="plus" />
        </button>
        <button
          onClick={() => {
            dispatch(counterAction({ id, count }));
          }}
        >
          submit
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

export default BottomCompsIncDecButtons;
