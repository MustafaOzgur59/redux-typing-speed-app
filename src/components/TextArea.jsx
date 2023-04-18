import React from "react";
import { useSelector } from "react-redux";

const TextArea = () => {
  const words = useSelector((state) => state.text.words);

  return (
    <div className="bg-white mt-3 rounded-lg h-[150px] overflow-hidden px-2 py-1 text-left w-3/5 mx-auto text-3xl">
      {words.map((word) => `${word} `)}
    </div>
  );
};

export default TextArea;
