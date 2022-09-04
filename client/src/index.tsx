import React from 'react';
import './app/layout/styles.css';
import App from './app/layout/App';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);