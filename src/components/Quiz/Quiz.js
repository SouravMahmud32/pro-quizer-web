import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Quiz = ({ quiz }) => {
  const { logo, name } = quiz;
  return (
    <div className="">
      <img
        className="object-cover w-150px h-20 md:h-64 xl:h-80"
        src={logo}
        alt=""
      />
      <p className="mb-4 text-lg font-bold text-gray-100">{name}</p>
      <button className="text-gray-100 bg-amber-600 m-2 p-2 border-r-4 rounded-md hover:bg-red-600">
        <a href="/quiz">
        Start Quiz
        <FontAwesomeIcon className="pl-2" icon={faArrowRight}></FontAwesomeIcon>
        </a>
      </button>
    </div>
  );
};

export default Quiz;
