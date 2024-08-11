import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './User';
import AppRoutes from './Routes';

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
