import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countDown } from "../redux/textSlice";

const Timer = () => {
  const timer = useSelector((state) => state.text.timer);
  const dispatch = useDispatch();
  const enableClock = useSelector((state) => state.text.enableClock);
  useEffect(() => {
    if (enableClock && timer > 0) {
      const interval = window.setInterval(() => {
        dispatch(countDown());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timer, enableClock, dispatch]);
  return (
    <div className="text-white text-2xl bg-gray-400 px-2 py-1 rounded-md">{`${Math.floor(
      timer / 60
    )}:${timer % 60 < 10 ? "0" : ""}${timer % 60}`}</div>
  );
};

export default Timer;
