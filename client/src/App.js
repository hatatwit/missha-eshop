import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "@stripe/stripe-js";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Authentication/Auth";
import Wishlist from "./pages/Wishlist/Wishlist";


const Layout = () => {
  return (
    <div className="Main">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/wishlist",
        element: <Wishlist/>
      },
      {
        path: "/auth",
        element: <Auth/>
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
