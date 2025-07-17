import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer/Footer";
import NavBar from "./components/navBar";
import Breadcrumb from "./components/common/Breadcrumb";
import { useState } from "react";
import ProductShowList from "./views/products";
import Login from "./views/auth/login/Login";
import Register from "./views/auth/register/Register";
import Contact from "./views/contact/Contact";
import HanbookPage from "./views/handbook/HanbookPage";
import PhoneFooter from "./components/layout/footer/PhoneFooter";
import ProductDetail from "./views/productDetail/ProductDetail";
import BellButton from "./components/popupButtons/bellButton/BellButton";
import ContactButton from "./components/popupButtons/contactButton/ContactButton";
import MessengerButton from "./components/popupButtons/messenger/MessengerButton";
import CartView from "./views/cart/CartView";
import CheckoutView from "./views/checkout/CheckoutView";
import HandbookDetail from "./views/handbook/HandbookDetail";
import FavoriteProducts from "./views/favorite/FavoriteProducts";
import SearchResults from "./views/search/SearchResults";
import CustomNotification from "./components/notification/CustomNotification";
import StoreLocations from "./views/storeLocation/StoreLocation";
import ReturnPolicy from "./views/policy/ReturnPolicy";
import PaymentPolicy from "./views/policy/PaymentPolicy";
import SalesPolicy from "./views/policy/SalesPolicy";
import ShippingPolicy from "./views/policy/ShippingPolicy";
import PurchaseGuide from "./views/policy/PurchaseGuide";
import PrivacyPolicy from "./views/policy/PrivacyPolicy";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  console.log("isSidebarOpen", isSidebarOpen);
  return (
    <BrowserRouter>
      <Header />
      <NavBar onSidebarToggle={setIsSidebarOpen} />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={<ProductShowList isSidebarOpen={isSidebarOpen} />}
        />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/handbooks" element={<HanbookPage />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/cart/checkout" element={<CheckoutView />} />
        <Route path="/handbooks/:id" element={<HandbookDetail />} />
        <Route path="/favorites" element={<FavoriteProducts />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/store-location" element={<StoreLocations />} />
        <Route path="/policy/return" element={<ReturnPolicy />} />
        <Route path="/policy/payment" element={<PaymentPolicy />} />
        <Route path="/policy/sales" element={<SalesPolicy />} />
        <Route path="/policy/shipping" element={<ShippingPolicy />} />
        <Route path="/policy/purchase-guide" element={<PurchaseGuide />} />
        <Route path="/policy/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <BellButton />
      <ContactButton />
      <MessengerButton />
      <PhoneFooter />
      <CustomNotification></CustomNotification>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
