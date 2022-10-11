import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { logo, name, id} = quiz;
  return (
    <div className="">
      <img
        className="object-cover w-150px h-20 md:h-64 xl:h-80"
        src={logo}
        alt=""
      />
      <p className="mb-4 text-lg font-bold text-gray-100">{name}</p>
      <Link to={`../StartQuiz/${id}`}>
        <button className="text-gray-100 bg-amber-600 m-2 p-2 border-r-4 rounded-md hover:bg-red-600">
          
            Start Quiz
            <FontAwesomeIcon
              className="pl-2"
              icon={faArrowRight}
            ></FontAwesomeIcon>
          
        </button>
      </Link>
    </div>
  );
};

export default Quiz;
