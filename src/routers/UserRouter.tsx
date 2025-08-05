import { Routes, Route } from "react-router-dom";
import Home from "../views/user/home/Home";
import About from "../views/user/about/About";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer/Footer";
import NavBar from "../components/navBar";
import Breadcrumb from "../components/common/Breadcrumb";
import ProductShowList from "../views/user/products";
import Login from "../views/user/auth/login/Login";
import Register from "../views/user/auth/register/Register";
import Contact from "../views/user/contact/Contact";
import HanbookPage from "../views/user/handbook/HanbookPage";
import PhoneFooter from "../components/layout/footer/PhoneFooter";
import ProductDetail from "../views/user/productDetail/ProductDetail";
import BellButton from "../components/popupButtons/bellButton/BellButton";
import ContactButton from "../components/popupButtons/contactButton/ContactButton";
import MessengerButton from "../components/popupButtons/messenger/MessengerButton";
import CartView from "../views/user/cart/CartView";
import CheckoutView from "../views/user/checkout/CheckoutView";
import HandbookDetail from "../views/user/handbook/HandbookDetail";
import FavoriteProducts from "../views/user/favorite/FavoriteProducts";
import SearchResults from "../views/user/search/SearchResults";
import CustomNotification from "../components/notification/CustomNotification";
import StoreLocations from "../views/user/storeLocation/StoreLocation";
import ReturnPolicy from "../views/user/policy/ReturnPolicy";
import PaymentPolicy from "../views/user/policy/PaymentPolicy";
import SalesPolicy from "../views/user/policy/SalesPolicy";
import ShippingPolicy from "../views/user/policy/ShippingPolicy";
import PurchaseGuide from "../views/user/policy/PurchaseGuide";
import PrivacyPolicy from "../views/user/policy/PrivacyPolicy";

interface UserRouterProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

function UserRouter({ isSidebarOpen, setIsSidebarOpen }: UserRouterProps) {
  return (
    <>
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
      <CustomNotification />
      <Footer />
    </>
  );
}

export default UserRouter;
