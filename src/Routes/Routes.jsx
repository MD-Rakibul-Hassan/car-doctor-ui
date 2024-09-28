import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from './../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

export const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element:<Home />
            },
            {
                path: '/login',
                element:<Login />
            },
            {
                path: '/signup',
                element:<SignUp />
            }
        ]
    }
])