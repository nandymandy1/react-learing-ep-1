import { useState } from "react";

const FirstComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 mx-auto">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{counter}</h4>
            <button onClick={incrementCounter} className="btn btn-primary me-2">
              +
            </button>
            <button className="btn btn-primary" onClick={decrementCounter}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
