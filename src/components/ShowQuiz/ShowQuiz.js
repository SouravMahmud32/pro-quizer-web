import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import QuizOption from "../QuizOption/QuizOption";

const ShowQuiz = ({ quiz }) => {
  const { name, question, options } = quiz;
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <div>
          <ol className="font-bold text-xl p-4">{question.slice(3, -4)}</ol>
          <button className="pl-40 "><FontAwesomeIcon className="p-2 rounded-lg hover:text-blue-500 text-xl hover:bg-gray-400" icon={faEyeSlash}></FontAwesomeIcon></button>
        </div>
        {options.map((option, idx) => (
          <QuizOption key={idx} option={option}></QuizOption>
        ))}
      </ul>
    </div>
  );
};

export default ShowQuiz;
