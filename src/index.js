import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import State from './State';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Product from './Content/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Product/>
  </React.StrictMode>
);

reportWebVitals();
