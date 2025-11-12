import { FormPage } from '@pages/form';
import { ItemPage } from '@pages/item';
import { ListPage } from '@pages/list';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const NoMatch = () => {
  return <div>404</div>;
};

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/form" element={<FormPage />} />
      <Route path="/form/:id" element={<FormPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/item/:id" element={<ItemPage />} />
      <Route path="/" element={<ListPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
