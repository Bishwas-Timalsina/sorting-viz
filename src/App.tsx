import { useState, useEffect } from "react";
import Visualizer from "./components/Visualizer";
import ArrayInput from "./components/ArrayInput";
import "./App.css";

const App = () => {
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [array, setArray] = useState<number[]>([]);

  // Function to generate a random number between 1 and 100
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  // Function to generate a new array based on the size
  const generateNewArray = (size: number) => {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(getRandomNumber());
    }
    setArray(newArray);
  };

  // Update the array whenever the arraySize changes
  useEffect(() => {
    generateNewArray(arraySize);
  }, [arraySize]);

  return (
    <div className="sorting-visualizer-container">
      {/* Pass state and functions down to ArrayInput component */}
      <ArrayInput
        arraySize={arraySize}
        setArraySize={setArraySize}
        speed={speed}
        setSpeed={setSpeed}
        generateNewArray={generateNewArray}
      />
      {/* Pass the array and arraySize as props to Visualizer */}
      <Visualizer array={array} arraySize={arraySize} />
    </div>
  );
};

export default App;
