import React from "react";
import toast, { Toaster } from "react-hot-toast";

const QuizOption = ({ option, quiz }) => {
  const { correctAnswer, id } = quiz;
  console.log(correctAnswer);
  const handleCorrectAnswer = (id) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer", { autoClose: 500 });
    } else {
        toast.error("Wrong Answer", { autoClose: 500 })
    }
  };
  return (
    <>
      <div className="p-2 flex items-center justify-center">
        <button
          className="p-2 flex items-center justify-center"
          
        >
          <input onClick={() => handleCorrectAnswer(id)}
            id="bordered-radio-1"
            type="radio"
            value=""
            name="bordered-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <p>{option}</p>
        </button>
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default QuizOption;
