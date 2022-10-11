import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizData = useLoaderData()
    console.log(quizData.data);
    const quizes = quizData.data;
    return (
        <div className='bg-black grid gap-6 row-gap-5 mb-8 lg:grid-cols-2 sm:row-gap-2 sm:grid-cols-1'>
            {
                quizes.map(quiz => <Quiz 
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;