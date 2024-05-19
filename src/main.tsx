import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.module.css'

// Configurando o Router:
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Importando páginas:
import { ErrorPage } from './pages/errorPage.tsx';
import { PageCadastro } from './pages/pageCadastro.tsx';
import { PageLogin } from './pages/pageLogin.tsx';


const router = createBrowserRouter([
  {
    path: '/', // Caminho da página
    element: <App />, // Componente da página
    errorElement: <ErrorPage /> // Página de error!
  },
  {
    path: 'cadastrar', 
    element: <PageCadastro />,
    errorElement: <ErrorPage />
  },
  {
    path: 'login',
    element: <PageLogin />,
    errorElement: <ErrorPage />
  }
]);

// Importando swiper - Carrossel de imagens
import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
