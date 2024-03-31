import React, { useEffect, useState } from "react";
import Progressbar from "./Progressbar/Progressbar";
import LineChart from "./LineChart";
import ProgressRange from "./Progressbar/ProgressRange";

const Ranges = () => {
  const [feedbackData, setFeedbackData] = useState({
    positive: 0,
    negative: 0,
    neutral: 0,
  });

  const getFeedbackData = async () => {
    try {
      const response = await fetch(
        "http://3.227.101.169:8020/api/v1/sample_assignment_api_5/",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Basic dHJpYWw6YXNzaWdubWVudDEyMw==",
          },
        }
      );
      const result = await response.json();
      setFeedbackData(result);
    } catch (error) {}
  };

  useEffect(() => {
    getFeedbackData();
  }, []);

  return (
    <div className="grid grid-rows-9 gap-2 place-items-center rounded-2xl h-[90vh] overflow-hidden">
      <div className="w-full h-full row-span-4 bg-white px-8 rounded-2xl">
        <div className="relative border-b pb-5">
          <div className="flex justify-center items-center">
            <Progressbar progress={100} />
          </div>
          <p className="text-gray-400 text-sm -mt-10 text-center">
            of 100 points
          </p>
        </div>
        <div className="space-y-3">
          <p className="mt-3 text-xl font-semibold">You're good!</p>
          <p className="text-gray-400 text-sm font-medium">
            Your sales performance score is better than 80% other users
          </p>
          <button className="text-sm border font-medium px-3 py-1 rounded-full">
            Improve your score
          </button>
        </div>
      </div>
      <div className="w-full h-full row-span-3 bg-white pt-4 px-2 rounded-2xl">
        <h3 className="px-6 font-semibold">Customers by device</h3>
        <div className="h-full py-3">
          <LineChart />
        </div>
      </div>
      <div className="w-full h-full row-span-2 bg-white px-8 py-2 rounded-2xl space-y-2">
        <p className="text-sm text-gray-400">Community feedback</p>
        <h3 className="font-semibold">Mostly Positive</h3>
        <ProgressRange
          positive={feedbackData?.positive}
          negative={feedbackData?.negative}
          neutral={feedbackData?.neutral}
        />
        <div className="grid grid-cols-3 gap-5">
          <div>
            <p className="text-gray-400 text-sm">Negative</p>
            <p className="font-medium">{feedbackData?.negative}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Neutral</p>
            <p className="font-medium">{feedbackData?.positive}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Positive</p>
            <p className="font-medium">{feedbackData?.neutral}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranges;
