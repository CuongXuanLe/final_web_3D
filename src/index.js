import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App as Canvas} from './Canvas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas />
  </React.StrictMode>
);

