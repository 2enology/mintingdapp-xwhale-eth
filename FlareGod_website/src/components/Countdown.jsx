import { default as ReactCountdown } from "react-countdown";

const Countdown = ({ endDateTime, onCanBreed }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="mt-5 text-2xl font-extrabold text-red-300 md:text-3xl animate-bounce">
        <span>{days} D</span> :<span>{hours} H</span> :<span>{minutes} M</span>{" "}
        :<span>{seconds} S</span>
      </div>
    );
  };

  const update = () => {
    onCanBreed();
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
