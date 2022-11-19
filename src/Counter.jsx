import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);

  return (
    <div className="col-12 col-md-4 offset-md-4 border  text-white">
      <span className="h2 pt-4 m-2 text-white-50">Fun Counter </span>
      <br />
      <button className="btn btn-success m-1">+1</button>
      <button className="btn btn-danger m-1">-1</button>
      <br />
      <span className="h4">
        Counter: &nbsp;
        <span className="text-success">{counter}</span>
      </span>
    </div>
  );
};

export default Counter;
