import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Discovery from './pages/Discovery';
import ProductResult from './pages/ProductResult';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "collection", element: <Collection /> },
      { path: "discovery", element: <Discovery /> },
      { path: "product/:id", element: <ProductResult /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
