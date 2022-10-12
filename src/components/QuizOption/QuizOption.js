import React from "react";

const QuizOption = ({ option }) => {
  console.log(option);
  return (
    <div className="p-2 flex items-center justify-center">
      <input
        id="bordered-radio-1"
        type="radio"
        value=""
        name="bordered-radio"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      ></input>
      <button>{option}</button>
    </div>
  );
};

export default QuizOption;
