import { useState } from "react";

const Timer = () => {
  let time = 0;
  const [start, setStart] = useState(false);
  function onStart(time) {
    setStart(!start);
    setInterval(time, 1000);
  }
  function onReset() {
    console.log(onReset);
  }
  return (
    <>
      <div className="outer-div">
        <div className="inner-div">
          <div className="circle">
            <div className="timer">{time}</div>
          </div>
          <div className="btn-outer">
            <button onClick={() => onStart(time)} className="btn btn-start">
              {start ? "Pause" : "Start"}
            </button>
            <button onClick={onReset} className="btn btn-reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
