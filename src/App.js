import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllCategories from "./components/AllCategories/AllCategories";
import AllProducts from "./components/AllProducts/AllProducts";
import AllUsers from "./components/AllUsers/AllUsers";
import LogIn from "./components/Auth/LogIn/LogIn";
import Register from "./components/Auth/Register/register";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Auth />} /> */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories" element={<AllCategories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
