import { useRoutes } from 'react-router-dom';
import { NOT_FOUND, ROOT } from '@/constants/routes';
import { Home } from './pages/Home';

export const AppRoutes = () =>
    useRoutes([
        {
            path: ROOT,
            element: <Home />
        },
        {
            path: NOT_FOUND,
            element: <Home />
        }
    ]);
