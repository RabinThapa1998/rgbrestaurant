import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import minus2 from "../assets/minus2.png";
import { useState } from "react";

const IncDecButtons = ({ color }) => {
  const [inc, setInc] = useState(0);
  const handleIncClick = () => {
    setInc(inc + 1);
  };
  const handleDecClick = () => {
    if (inc > 0) {
      setInc(inc - 1);
    }
  };
  if (color == "green") {
    return (
      <div className="specialdish-incrementbtn-container my-2 mx-0 px-2">
        <button
          className="specialdish-incrementbtn decrement-gradient-green"
          onClick={() => handleDecClick()}
        >
          <img src={minus} alt="minus" />
        </button>
        <p className="specialdish-incrementbtn-text">{inc}</p>
        <button
          className="specialdish-incrementbtn  increment-gradient-green "
          onClick={() => handleIncClick()}
        >
          <img src={plus} alt="plus" />
        </button>
      </div>
    );
  }
  if (color == "red") {
    return (
      <div className="specialdish-incrementbtn-container  mx-0">
        <button
          className="specialdish-incrementbtn decrement-gradient-red"
          onClick={() => handleDecClick()}
        >
          <img src={minus2} alt="minus" />
        </button>
        <p className="specialdish-incrementbtn-text">{inc}</p>
        <button
          className="specialdish-incrementbtn  increment-gradient-red "
          onClick={() => handleIncClick()}
        >
          <img src={plus} alt="plus" />
        </button>
      </div>
    );
  }
};

export default IncDecButtons;
