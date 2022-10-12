import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuiz from '../ShowQuiz/ShowQuiz';

const StartQuiz = () => {
    const quizData = useLoaderData();
    const {data} = quizData;
    // console.log(quizData);
    const quizes = quizData.data.questions;
    // console.log(quizes);
    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-500 p-4'>Quiz</h1>
            <h1 className='text-3xl font-bold text-yellow-500 p-4'>{data.name}</h1>
            {
                quizes.map(quiz => <ShowQuiz 
                key={quiz.id}
                quiz={quiz}
                ></ShowQuiz>)
            }
        </div>
    );
};

export default StartQuiz;