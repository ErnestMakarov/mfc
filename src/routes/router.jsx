import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import App from '../app/App.jsx'
import Home from '../pages/Home/Home.jsx'
import About from '../pages/About/About.jsx'
import Coaches from '../pages/Coaches/Coaches.jsx'
import Training from '../pages/Training/Training.jsx'
import News from '../pages/News/News.jsx'
import Contacts from '../pages/Contacts/Contacts.jsx'
import Documents from '../pages/Documents/Documents.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: "/coaches", element: <Coaches /> },
      { path: "/training", element: <Training /> },
      { path: "/news", element: <News /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/documents", element: <Documents /> },
    ]
  }
]);
