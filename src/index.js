import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Add from './components/Add';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
