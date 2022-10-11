import React, { useState } from "react";

const ShowQuiz = ({ quiz }) => {
  const { name, question, options } = quiz;
  return (
    <div>
      <ul>
        <ol>{question}</ol>
        <input
          type="checkbox"
          className="appearance-none checked:bg-blue-500 ..."
        />
      </ul>
    </div>
  );
};

export default ShowQuiz;
