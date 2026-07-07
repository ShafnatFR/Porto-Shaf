import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import A4Resume from './components/A4Resume.tsx';
import './index.css';

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/a4' ? <A4Resume /> : <App />}
  </StrictMode>,
);
