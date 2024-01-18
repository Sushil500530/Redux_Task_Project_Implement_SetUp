
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Tasks from '../pages/Tasks';
import Chat from '../pages/Chat';
import Setting from '../pages/Setting';
import Profile from '../pages/Profile';
import PrivateRoute from '../components/layouts/PrivateRoute';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Archive from '../pages/Archive';

const Router = createBrowserRouter([
    {
        path: '/',
        element: (
          <PrivateRoute>
            <App />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <Tasks />,
          },
          {
            path: '/archive',
            element: <Archive />,
          },
          {
            path: '/chat',
            element: <Chat />,
          },
          {
            path: '/settings',
            element: <Setting />,
          },
          {
            path: '/profile',
            element: <Profile />,
          },
        ],
    },
    {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
])

export default Router;