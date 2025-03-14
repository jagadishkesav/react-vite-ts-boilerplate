import { useRoutes } from 'react-router-dom';
import { HOME } from '@/constants/routes';
import { Home } from './pages/Home';

export const AppRoutes = () =>
    useRoutes([
        {
            path: HOME,
            element: <Home />
        }
    ]);
