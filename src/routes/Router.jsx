
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Tasks from '../pages/Tasks';
import Chat from '../pages/Chat';
import Setting from '../pages/Setting';
import Profile from '../pages/Profile';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Tasks />,
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
    }
])

export default Router;