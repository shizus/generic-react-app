import './App.css';

import React, {Suspense, lazy} from 'react';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Space} from 'antd';

const Login = lazy(() => import('./login/Login'));
const Register = lazy(() => import('./register/Register'));

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <Space direction="vertical" size="middle" style={{ display: 'flex', alignItems: 'center' }}>
                <Login style={{width: '600px', }}>
                </Login>
            </Space>,
    },
    {
        path: "/register",
        element:
            <Space direction="vertical" size="middle" style={{ display: 'flex', alignItems: 'center' }}>
                <Register style={{width: '600px', }}>
                </Register>
            </Space>,
    },
]);

const App: React.FC = () => (
    <React.StrictMode>
        <Suspense fallback={<div>Loading... </div>}>
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>
);

export default App;
