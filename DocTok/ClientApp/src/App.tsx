import React, { Component } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import globalRouter from "./globalRouter";


export default function App() {
  const navigate = useNavigate();
  globalRouter.navigate = navigate;

  return (
    <Layout>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </Layout>
  );
}

