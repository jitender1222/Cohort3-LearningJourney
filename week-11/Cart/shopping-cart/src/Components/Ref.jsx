import { useRef, useState } from "react";

const Ref = () => {
  const [value, setValue] = useState(0);
  const [timer, setTimer] = useState(0);
  const start = () => {
    let value = setInterval(() => {
      setValue((c) => c + 1);
    }, 1000);
    console.log(timer);
    setTimer(value);
  };

  const stop = () => {
    clearInterval(timer);
  };

  return (
    <div className="m-10">
      <span>{value}</span>
      <br />
      <button className="bg-red-400 px-4 rounded-xl" onClick={start}>
        Start
      </button>
      <button className="bg-red-400 px-4 rounded-xl" onClick={stop}>
        Stop
      </button>
    </div>
  );
};

export default Ref;
