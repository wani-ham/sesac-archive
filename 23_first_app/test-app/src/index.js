import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './Clock';
import Larva from './Larva';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
      <Larva />
    </React.StrictMode>
  )
}, 1000);

