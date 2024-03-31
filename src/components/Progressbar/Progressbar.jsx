import React from "react";
import { SemiCircleProgress } from "react-semicircle-progressbar-with-needle";

const Progressbar = ({ progress }) => {
  return (
    <SemiCircleProgress
      percentage={progress}
      size={{
        width: 150,
        height: 150,
      }}
      strokeWidth={10}
      strokeColor="#0ea5e9"
    />
  );
};

export default Progressbar;
