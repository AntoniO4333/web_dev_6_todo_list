import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Загрузка стилей, если нужно
import '../public/css/main.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
