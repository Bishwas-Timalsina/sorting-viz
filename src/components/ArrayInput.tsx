import React from "react";

interface ArrayInputProps {
  arraySize: number;
  setArraySize: React.Dispatch<React.SetStateAction<number>>;
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  generateNewArray: (size: number) => void;
}

const ArrayInput: React.FC<ArrayInputProps> = ({
  arraySize,
  setArraySize,
  speed,
  setSpeed,
  generateNewArray,
}) => {
  return (
    <div className="sorting-visualizer-container__controller">
      <div className="controller-item">
        <input
          className="array-range-slider slider"
          type="range"
          min="1"
          max="150"
          value={arraySize}
          onChange={(event) => {
            const size = parseInt(event.target.value);
            setArraySize(size);
            generateNewArray(size);
          }}
        />
        <label className="array-range-slider-label label">
          Array Size = {arraySize}
        </label>
      </div>

      <div className="controller-item">
        <button
          className="generate-array-btn btn"
          onClick={() => generateNewArray(arraySize)}
        >
          Generate New Array
        </button>
      </div>

      <div className="controller-item">
        <button className="start-sorting-btn btn">Start Sort</button>
      </div>

      <div className="controller-item speed-range-slider-con">
        <input
          className="speed-range-slider slider"
          type="range"
          min="1"
          max="500"
          value={speed}
          onChange={(event) => setSpeed(parseInt(event.target.value))}
        />
        <label className="speed-range-slider-label label">
          Speed = {speed} ms
        </label>
      </div>

      <div className="controller-item">
        <button className="sorting-option-btn btn">Bubble Sort</button>
      </div>

      <div className="controller-item">
        <button className="bar-direction-btn btn">Bar-Dir</button>
      </div>
    </div>
  );
};

export default ArrayInput;
