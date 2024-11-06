import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists and is properly styled
import App from './app'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
