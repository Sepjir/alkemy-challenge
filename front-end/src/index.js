import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login'
import Inicio from './routes/Inicio';
import Register from './routes/Register';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { BrowserRouter , Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <Routes>
          <Route element={<App/>}>
            <Route path='/' element={<Inicio/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
          </Route>
       </Routes>
    </BrowserRouter>
);