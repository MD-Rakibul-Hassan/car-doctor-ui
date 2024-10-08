import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from './../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Service_page from '../Pages/Services/Service_page';
import SingleService from '../Pages/SingleService/SingleService';
import AddService from '../Pages/AddService/AddService';
import CartItems from '../Pages/Cart/Cart_details/CartItems';

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/services",
        element: <Service_page />,
      },
      {
        path: "/service/:id",
        loader: ({ params }) => fetch("./services.json"),
        element: <SingleService />,
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/cart-items",
        element: <CartItems />,
      },
    ],
  },
]);