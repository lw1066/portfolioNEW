import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';



import './index.css';
import App from './App';

netlifyIdentity.init();
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
    <AuthContextProvider>
    
        <App />
    
    </AuthContextProvider>
    </StrictMode>

);

