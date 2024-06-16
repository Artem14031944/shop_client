import React, { useContext } from 'react';
import { authRoutes, publicRoutes } from '../../routes';
import { Route, Routes } from 'react-router-dom';
import { Context } from '../..';
import Shop from '../../pages/Shop';

export default function AppRoter() {
  const { user } = useContext(Context);
  
  return (
    <Routes>
      {user._user && authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component/>}/>)}
      {publicRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component/>}/>)}
      <Route path={'/*'} element={<Shop/>}/>
    </Routes>
  );
};