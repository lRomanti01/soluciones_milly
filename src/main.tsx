import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Product from './pages/Product.tsx';
import CategoryPage from './pages/CategoryPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <CategoryPage />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ToastContainer /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
