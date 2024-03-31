import React from "react";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { formatNumber } from "../common/formatNumber";

const MacroData = ({ macroData }) => {
  const data = [
    {
      topic: "Purchases",
      amount: formatNumber(macroData?.purchases),
      change: +32,
    },
    {
      topic: "Revenue",
      amount: formatNumber(macroData?.revenue),
      change: +49,
    },
    {
      topic: "Refunds",
      amount: formatNumber(macroData?.refunds),
      change: -7,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="border rounded-xl border-gray-300 shadow-sm p-3 space-y-2"
          >
            <p className="text-sm text-gray-400 font-medium">{item?.topic}</p>
            <div className="flex justify-start items-center gap-2">
              <p className="text-2xl font-bold">{item?.amount}</p>

              <p
                className={`px-2 py-1 rounded-full flex justify-start items-center gap-1 text-xs font-semibold ${
                  item.change > 0
                    ? "bg-[#00ff4f40] text-green-600 border border-green-600"
                    : "bg-[#ff01014d] text-red-700 border border-red-700"
                }`}
              >
                {item?.change}%{" "}
                <span>
                  {item?.change > 0 ? <HiTrendingUp /> : <HiTrendingDown />}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MacroData;
