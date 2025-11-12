import React from 'react';
import { useParams } from 'react-router-dom';
import { CreateFormPage } from './CreateFormPage';
import { EditFormPage } from './EditFormPage';

export const FormPage = () => {
  const { id } = useParams();
  console.log(id);
  return id ? <EditFormPage /> : <CreateFormPage />;
};
