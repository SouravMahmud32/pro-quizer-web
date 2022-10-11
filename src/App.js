import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import Errorpage from './components/Errorpage/Errorpage';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Main from './components/layouts/Main';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: '/',
          element: <Banner></Banner>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/statics',
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
