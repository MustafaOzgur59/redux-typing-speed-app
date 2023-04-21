import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const {
    correctWordCount,
    wrongWordCount,
    totalKeyPress,
    correctKeyPress,
    wrongKeyPress,
  } = useSelector((state) => state.text);
  return (
    <div className="flex  w-4/5  mx-auto  ">
      <div className=" text-left flex flex-col w-3/12  ">
        <div className="bg-[#5180A2] text-white px-3 py-1 ">
          <span className="font-bold">
            Sonuç
            <span className="text-sm font-normal ml-2 ">Ekran Görüntüsü</span>
          </span>
        </div>
        <ul className="[&>*:nth-child(odd)]:bg-[#ececed] [&>*:nth-child(even)]:bg-white  border-b-2  border-[#eeeeee]">
          <li className="flex flex-col items-center py-4 px-2">
            <h1 className="text-3xl text-green-700">
              {(correctKeyPress / 5).toFixed(0)}
            </h1>
          </li>
          <li className="flex justify-between py-1 px-4">
            <span>Tuş Vuruşu</span>
            <div>
              <span className="text-sm">
                (<span className="text-green-400">{correctKeyPress}</span> |{" "}
                <span className="text-red-400">{wrongKeyPress}</span> )
              </span>
              {totalKeyPress}
            </div>
          </li>
          <li className="flex justify-between py-1 px-4">
            <span>Doğruluk</span>
            <span>{((correctKeyPress / totalKeyPress) * 100).toFixed(2)}%</span>
          </li>
          <li className="flex justify-between py-1 px-4">
            <span>Doğru Kelime</span>
            <span>{correctWordCount}</span>
          </li>
          <li className="flex justify-between py-1 px-4">
            <span>Yanlış Kelime</span>
            <span>{wrongWordCount}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Result;
