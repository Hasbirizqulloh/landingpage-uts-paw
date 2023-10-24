import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './dists/css/main.css';

import { BrowserRouter } from 'react-router-dom';
import ScrollTotop from './component/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTotop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
