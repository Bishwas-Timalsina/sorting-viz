import React from "react";

interface VisualizerProps {
  array: number[];
  arraySize: number;
}

const Visualizer: React.FC<VisualizerProps> = ({ array, arraySize }) => {
  const COLORS = {
    bar: "orange",
    sortedNumber: "#9b59b6",
    firstNumber: "#FF4949",
    secondNumber: "#2ecc71",
  };

  return (
    <div
      className="sorting-visualizer-container__bar"
      style={{ display: "flex", alignItems: "flex-end", gap: "2px" }}
    >
      {array.map((value, index) => (
        <div
          key={index}
          className="sorting-bar"
          style={{
            height: `${value}%`,
            width: "10px",
            backgroundColor: COLORS.bar,
            display: "inline-block",
            position: "relative",
          }}
        >
          <p
            style={{
              opacity: arraySize > 40 ? 0 : 1,
              color: "black",
              fontSize: "10px",
              position: "absolute",
              bottom: "0",
            }}
          >
            {value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Visualizer;
