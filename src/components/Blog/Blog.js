import React from 'react';

const Blog = () => {
    return (
        <div>
            <ul className='p-2'>
                <li className='text-3xl font-semibold mb-2'>1. What is the perpuse of use react router?</li>
                <li><span className='font-bold'>Ans:</span> React Router is a standard library for routing in React. It enables the navigation among views of various <br></br> components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</li>
                <li className='text-3xl font-semibold mb-2'>2. How does Context API work?</li>
                <li><span className='font-bold'>Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be <br /> passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. </li>
                <li className='text-3xl font-semibold mb-2'>3.Tell about <span>useRef</span> hooks?</li>
                <li><span className='font-bold'>Ans:</span> useRef returns a mutable ref object whose .current property is initialized to the passed argument <span>(initialValue)</span>. <br /> The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</li>
            </ul>
        </div>
    );
};

export default Blog;