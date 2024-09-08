import App from './pages/App';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Customer from './pages/Customer';

const routeArray = [
    {
        path: '/',
        element: <Home />,
        errorElement: <App />
    },
    {
        path: '/customer',
        element: <Customer />,
    },
    {
        path: '/restaurant/:id',
        element: <Restaurant />,
    }
];

export { routeArray };