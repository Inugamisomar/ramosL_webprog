<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'articles',
        element: <ArticlePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
=======
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>

        <p>
          Name: Leovik Ramos <br />
          Email: ramosleovik@gmail.com <br />
          Other Personal Info: Education: Bachelor of Science in Information Technology Specialization with Mobile and Web Applications <br />
          Skills: JavaScript, React, Node.js, Python <br />
          Hobbies: Coding, Traveling, Cooking
        </p>

      </header>
    </div>
  )
}

export default App
>>>>>>> 75ab88e7b9c8eb7a0447947462389bc44c8052e9
