import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
<head>
<link href="https://fonts.googleapis.com/css2?family=Ruda:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<script src="https://kit.fontawesome.com/06ba9e12e8.js" crossorigin="anonymous"></script>
</head>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

