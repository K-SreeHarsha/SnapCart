import "./App.css";
import Header from "./layout/Header/Header";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/category" element={<Category />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
