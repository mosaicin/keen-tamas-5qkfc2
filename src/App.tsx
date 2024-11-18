import React, { useState } from "react";

const InteractiveCard: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Interactive Card</h2>
      <div className="flex items-center justify-center mb-4">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-2xl font-bold text-gray-600">
          {count}
        </div>
      </div>
      <div className="flex space-x-4 justify-center">
        <button
          onClick={decrementCount}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <button
          onClick={incrementCount}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default InteractiveCard;