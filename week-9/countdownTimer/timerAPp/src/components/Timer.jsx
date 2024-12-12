import { useEffect, useState } from "react";

const Timer = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    let intervalId;
    if (start) {
      console.log("inside start");
      intervalId = setInterval(() => {
        setTime(time + 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [start, time]);

  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  function onStart() {
    setStart(!start);
  }

  function onReset() {
    setTime(0);
  }
  return (
    <>
      <div className="outer-div">
        <div className="inner-div">
          <div className="circle">
            <div className="timer">
              {hours}:{minutes.toString().padStart(2, 0)}:
              {seconds.toString().padStart(2, 0)}:
              {milliseconds.toString().padStart(2, 0)}
            </div>
          </div>
          <div className="btn-outer">
            <button onClick={() => onStart()} className="btn btn-start">
              {start ? "Pause" : "Start"}
            </button>
            <button onClick={() => onReset()} className="btn btn-reset">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
