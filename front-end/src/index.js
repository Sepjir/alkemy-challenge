import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './components/Dashboard';
import Login from './components/Login'

import { BrowserRouter , Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
       </Routes>
    </BrowserRouter>
);