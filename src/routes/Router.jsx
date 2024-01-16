
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // {
            //     index: true,
            //     element: <Tasks />,
            // },
            // {
            //     path: '/chat',
            //     element: <Chat />,
            // },
            // {
            //     path: '/settings',
            //     element: <Settings />,
            // },
            // {
            //     path: '/profile',
            //     element: <Profile />,
            // },
        ],
    }
])

export default Router;