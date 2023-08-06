import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateComponents from "./components/PrivateComponents";
import { useEffect } from "react";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";
import Admin from "./pages/Admin";
import Footer from "./components/footer";
import ProductsPage from "./pages/ProductsPage";
import Home from "./pages/Home"
import Cart from "./components/Cart/Cart";
import Header from "../src/components/Header";
import Orders from "./pages/Orders";
function App() {
  const Navigate = useNavigate();
  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     Navigate("/");
  //   }
  // }, []);
  return (
    <>
      {/* <BrowserRouter> */}
      <Header />
      <Routes>
        <Route element={<PrivateComponents />}>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Route>
        <Route element={<PrivateComponents />}>
          <Route
            path="/products"
            element={
              <>
                <ProductsPage />
              </>
            }
          />
        </Route>
        <Route
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/Cart"
          element={
            <>
              <Cart />
            </>
          }
        />
        <Route
          path="/order"
          element={
            <>
              <Orders />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Admin />
            </>
          }
        />
        <Route
          path="/addproduct"
          element={
            <>
              <AddProduct />
            </>
          }
        />
        <Route
          path="/deleteproduct"
          element={
            <>
              <DeleteProduct />
            </>
          }
        />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
