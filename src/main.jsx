import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main';
import Home from './components/layout/pages/Home';
import Login from './components/layout/pages/form/Login';
import Registration from './components/layout/pages/form/Registration';
import Authprovider from './providers/Authprovider';
import Checkout from './components/layout/pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
       {
           path: '/',
           element: <Home></Home>
       },
       {
           path:'/login',
           element:<Login></Login>
       },
       {
         path:'/signup',
         element:<Registration></Registration>
       },
       {
         path: '/checkout/:id',
         element: <Checkout></Checkout>,
         loader : ({params})=> fetch(`http://localhost:5007/services/${params.id}`)
       }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl container mx-auto'>
    <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
  </div>
)
