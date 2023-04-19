import React, { useState } from "react";
import Timer from "./Timer";
import { useDispatch } from "react-redux";
import { checkWordMatch, goNextWord } from "../redux/textSlice";

const InputArea = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.value.endsWith(" ")) {
      dispatch(goNextWord(e.target.value.slice(0, -1)));
      setVal("");
    } else {
      setVal(e.target.value);
      dispatch(checkWordMatch(e.target.value));
    }
  };
  return (
    <div className="bg-[#A6C8E6] w-4/5 flex justify-center items-center mx-auto rounded-md py-1 gap-4">
      <input
        type="text"
        value={val}
        onChange={handleChange}
        className=" text-2xl font-medium rounded-md px-2 w-5/12"
      />
      <Timer />
      <button className=" px-3 text-white rounded-md text-2xl bg-blue-500">
        {"\u{21BB}"}
      </button>
    </div>
  );
};

export default InputArea;
