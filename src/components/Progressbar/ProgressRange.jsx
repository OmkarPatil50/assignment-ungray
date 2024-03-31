import React from "react";

const ProgressRange = ({ negative, positive, neutral }) => {
  const total = negative + positive + neutral;
  const negativeWidth = (negative / total) * 100;
  const positiveWidth = (positive / total) * 100;
  const neutralWidth = (neutral / total) * 100;

  return (
    <div className="w-full flex h-2 bg-gray-200 rounded-lg overflow-hidden">
      <div
        className="h-full bg-red-500"
        style={{ width: `${negativeWidth}%` }}
      ></div>
      <div
        className="h-full bg-yellow-500"
        style={{ width: `${neutralWidth}%` }}
      ></div>
      <div
        className="h-full bg-green-500"
        style={{ width: `${positiveWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressRange;
