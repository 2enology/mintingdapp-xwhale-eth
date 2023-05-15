import { default as ReactCountdown } from "react-countdown";
import { useState } from "react";

const Countdown = ({ endDateTime, onCanBreed }) => {
  const [iscompleted, setIsCompleted] = useState(false);
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <>
        {!iscompleted ? (
          <>
            <h1 className="text-xl text-white">WhiteList End : </h1>
            <div className="mt-5 text-2xl font-extrabold text-red-400 md:text-3xl animate-bounce">
              <span>{days} D</span> :<span>{hours} H</span> :
              <span>{minutes} M</span> :<span>{seconds} S</span>
            </div>
          </>
        ) : (
          <div className="mt-5 text-2xl font-extrabold text-red-400 md:text-3xl animate-bounce">
            WHITLIST: SOLDOUT!
          </div>
        )}
      </>
    );
  };

  const update = () => {
    onCanBreed();
    setIsCompleted(true);
  };

  return (
    <ReactCountdown
      date={endDateTime}
      renderer={renderer}
      onComplete={update}
    />
  );
};

export default Countdown;
