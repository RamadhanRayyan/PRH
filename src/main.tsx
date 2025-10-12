import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { Routing } from './Routing.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
);
