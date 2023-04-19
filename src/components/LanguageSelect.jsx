import React from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../redux/textSlice";

const LanguageSelect = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-4/5 mx-auto text-left">
      <select
        onChange={(e) => dispatch(changeLanguage(e.target.value))}
        name=""
        id=""
        className="bg-green-400 px-2 py-1 rounded-md text-white outline-none"
      >
        <option className="bg-white text-black " value="turkish">
          Türkçe
        </option>
        <option className="bg-white text-black" value="english">
          English
        </option>
      </select>
    </div>
  );
};

export default LanguageSelect;
