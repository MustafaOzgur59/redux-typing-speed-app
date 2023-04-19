import React, { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const TextArea = () => {
  const words = useSelector((state) => state.text.words);
  const ref = useRef(null);
  const currentWordIndex = useSelector((state) => state.text.currentWordIndex);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  }, [currentWordIndex]);
  return (
    <div className="bg-white mt-3 rounded-lg h-[100px] overflow-hidden px-2 py-1 text-left w-4/5 mx-auto text-xl flex flex-wrap">
      {words.map(({ word, color, bgColor }, index) => (
        <span
          key={index}
          ref={index === currentWordIndex ? ref : null}
          style={{
            color: color,
            backgroundColor: index === currentWordIndex ? "#DDDDDD" : "#FFFFFF",
          }}
          className="rounded-md px-1"
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextArea;
