import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';
import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import SingleBlog from './blog/SingleBlog.jsx';
import Shop from './shop/shop.jsx';
import About from './about/About.jsx';
import Contact from './contact/Contact.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Login from './components/Login.jsx';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingleProduct from './shop/SingleProduct.jsx';
import CartPage from './shop/CartPage.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Signup from './components/Signup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />
      },
      {
        path:"/shop",
        element: <Shop />
      },
      {
        path:"shop/:id",
        element: <SingleProduct />
      },
      {
        path: "/cart-page",
        element: <PrivateRoute><CartPage /></PrivateRoute>
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <Signup />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
