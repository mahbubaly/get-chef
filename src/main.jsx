import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './Main/Main.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Pages/Error.jsx';
import LogIn from './Pages/LogIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import Banner from './Pages/Banner.jsx';
import SingleChef from './Pages/ChefDetails/SingleChef.jsx';
import AuthProvider from './Main/Authprovider/AuthProvider.jsx';
import PrivateRoute from './Pages/PrivateRoutes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Banner />

      },
      {
        path: "/log",
        element: <LogIn />
      },
      {
        path: "/sign",
        element: <SignUp />
      },
      {
        path: "/chef/:id",
        element: <PrivateRoute> <SingleChef></SingleChef> </PrivateRoute> ,
        loader: ({ params }) => fetch(`https://server-site-five-flax.vercel.app/allChef/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
