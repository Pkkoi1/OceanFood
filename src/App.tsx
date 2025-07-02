import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer/Footer";
import NavBar from "./components/navBar";
import Breadcrumb from "./components/common/Breadcrumb";
import { useState } from "react";
import ProductShowList from "./views/products";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  console.log("isSidebarOpen", isSidebarOpen);
  return (
    <BrowserRouter basename="/OceanFood">
      <Header />
      <NavBar onSidebarToggle={setIsSidebarOpen} />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductShowList />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
