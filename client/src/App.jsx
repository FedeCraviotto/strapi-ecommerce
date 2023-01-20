import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';
import Home from './views/Home/Home';
import Product from './views/Product/Product';
import Products from './views/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Layout = () => {
  return(
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/products/:id',
        element:<Products />
      },
      {
        path:'/product/:id',
        element:<Product />
      },
    ]
  }
])
function App(){
  return(
    <>
    <RouterProvider router={router} />    
    </>
  )
}

export default App;