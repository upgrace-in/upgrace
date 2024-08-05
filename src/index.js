import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RAC from './components/RAC'
import CONTACT from './components/CONTACT'
import TNC from './components/TNC'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="TermsandConditions" element={<TNC />} />
          <Route path="ContactUs" element={<CONTACT />} />
          <Route path="RefundandCancellation" element={<RAC />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <App/> */}
  </React.StrictMode>
);
