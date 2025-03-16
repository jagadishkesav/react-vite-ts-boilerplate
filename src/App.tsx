import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '@/router';
import { theme } from '@/styles/theme';

// Initialize the QueryClient
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <AppRoutes />
                </Router>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
