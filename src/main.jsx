import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./dist/css/main.css";
import ScrollToTop from './component/ScrollToTop.jsx';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
