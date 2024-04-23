import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Test from './Test';
import NotFound from './Screens/notFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route path="/" element={<Navigate to="/app/inicio" />} />
        <Route path="/app/*" element={<App />} />
        <Route path="/test/*" element={<Test />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


