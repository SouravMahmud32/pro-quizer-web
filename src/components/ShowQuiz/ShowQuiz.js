import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import QuizOption from "../QuizOption/QuizOption";

const ShowQuiz = ({ quiz }) => {
    console.log(quiz);
  const { name, question, options, correctAnswer } = quiz;
  const handleShowCorrectAnswer = () =>{
    console.log(correctAnswer);
    toast.success(`${correctAnswer}`, {
        position: "top-right"
      })
  }
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <div>
          <ol className="font-bold text-xl p-4">{question.slice(3, -4)}</ol>
          <button className="pl-40 " onClick={handleShowCorrectAnswer} aria-label='Show Answer'  title='Click to see Answer'><FontAwesomeIcon className="p-2 rounded-lg hover:text-blue-500 text-xl hover:bg-gray-400" icon={faEyeSlash}></FontAwesomeIcon></button>
        </div>
        {options.map((option, idx) => (
          <QuizOption key={idx} option={option} quiz={quiz}></QuizOption>
        ))}
      </ul>
    </div>
  );
};

export default ShowQuiz;
