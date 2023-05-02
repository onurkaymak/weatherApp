import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.module.scss';

import App from './App';

import { WeatherContextProvider } from './store/weather-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>
);


