import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer/Footer";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
