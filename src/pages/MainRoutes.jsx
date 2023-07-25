import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import Contact from "./Contact";
import Store from "./Store";
import Admin from "./Admin";
import Category from "./Category";
import Product from "./Product";
import Footer from "../components/footer/components/Footer";
import Navbar from "../components/navbar/components/Navbar";
import Bestsellers from "../components/bestsellers/components/Bestsellers";
import Search from "./Search";
import PageNotFound from "./PageNotFound";
import Terms from "./Terms";
import PrivacyPolicy from "./PrivacyPolicy";
import Founder from "./Founder";
import FAQ from "./FAQ";

const MainRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {location.pathname !== "/admin" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Store />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bestsellers" element={<Bestsellers />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/collections/:id" element={<Category />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/categories" element={<Admin />} />
        <Route path="/admin/collections" element={<Admin />} />
        <Route path="/admin/products" element={<Admin />} />
        <Route path="/admin/subscribers" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {location.pathname !== "/admin" && <Footer />}
    </>
  );
};

export default MainRoutes;
