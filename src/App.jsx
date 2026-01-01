import React, { useEffect, useState, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import { CartProvider } from "./pages/CartContext";
import CheackoutPage from "./pages/CheackoutPage";
import Banner from "./components/Banner";
import Quote from "./components/Quote";
import FirstSection from "./components/FirstSection";
import QuoteSec from "./components/QuoteSec";
import SecSection from "./components/SecSection";
import ThirdSec from "./components/ThirdSec";
import ForthSection from "./components/ForthSection";
import QuoteThird from "./components/QuoteThird";
import LastSec from "./components/LastSec";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import RefundExchange from "./pages/RefundExchange";
import Articles from "./pages/Articles";
import Terms from "./pages/Terms";
import FeedbackForm from "./pages/FeedbackForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Packaging from "./pages/Packaging";
import Raastay from "./pages/Raastay";
import ChhapTilak from "./pages/ChhapTilak";
import ChandiniRaat from "./pages/ChandiniRaat";
import Zaban from "./pages/Zaban";
import BegumEBahar from "./pages/BegumEBahar";
import Safarnama from "./pages/Safarnama";
import Rangrez from "./pages/Rangrez";
import Viraas from "./pages/Viraas";
import Phool from "./pages/Phool";
import Anchal from "./pages/Anchal";
import Anjaan from "./pages/Anjaan";
import Dosti from "./pages/Dosti";
import PhoolSilk from "./pages/PhoolSilk";
import RaangLal from "./pages/RaangLal";
import Zard from "./pages/Zard";
import RangSafaid from "./pages/RangSafaid";
import Kalidar from "./pages/Kalidar";
import Sukoon from "./pages/Sukoon";
import Shop from "./pages/Shop";
import CountrySelector from "./pages/CountrySelector";
import Reviews from "./pages/Reviews";
import BrandImg from "./pages/BrandImg";
import Saree from "./pages/Saree";
import PardesEdition from "./pages/PardesEdition";
import SafarNamaShop from "./pages/SafarNamaShop";
import Khushbu from "./pages/Khushbu";
import Formals from "./pages/Formals";
import Rang from "./pages/Rang";
import Basics from "./pages/Basics";
import BinKhay from "./pages/BinKhay";

import OpenBanner from "./components/OpenBanner"; // ✅ import OpenBanner

// ✅ Create context to share selected country
export const CountryContext = createContext();
export const useCountry = () => useContext(CountryContext);

// ✅ Layout for showing/hiding Navbar/Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/"; // hide navbar/footer on CountrySelector

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}
      <ScrollToTop />
      <main className="flex-grow">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

// ✅ Route guard for home
const ProtectedRoute = ({ children }) => {
  const country = localStorage.getItem("selectedCountry");
  return country ? children : <Navigate to="/" replace />;
};

const App = () => {
  const [country, setCountry] = useState(localStorage.getItem("selectedCountry"));

  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) setCountry(savedCountry);
  }, []);

  return (
    <CartProvider>
      <CountryContext.Provider value={{ country, setCountry }}>
        <Router>
          <Layout>
            <Routes>
              {/* Country Selector first page */}
              <Route path="/" element={<CountrySelector />} />

              {/* Home page */}
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <>
                      <OpenBanner
                        imageUrl="https://example.com/your-banner-image.jpg"
                        linkUrl="https://example.com/target-link"
                      />
                      <Banner />
                      <Quote />
                      <FirstSection />
                      <QuoteSec />
                      <SecSection />
                      <ForthSection />
                      <QuoteThird />
                      <LastSec />
                    </>
                  </ProtectedRoute>
                }
              />

              {/* Shop page */}
              <Route
                path="/shop"
                element={
                  <ProtectedRoute>
                    <Shop />
                  </ProtectedRoute>
                }
              />

              {/* Product pages */}
              <Route path="/product/:id" element={<ProductDetail />} />

              {/* Cart/Checkout */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheackoutPage />} />

              {/* Other pages */}
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/refund-exchange" element={<RefundExchange />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/feedback-form" element={<FeedbackForm />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/packaging" element={<Packaging />} />
              <Route path="/raastay" element={<Raastay />} />
              <Route path="/chhap-tilak" element={<ChhapTilak />} />
              <Route path="/chandini-raat" element={<ChandiniRaat />} />
              <Route path="/zaban" element={<Zaban />} />
              <Route path="/begum-e-bahar" element={<BegumEBahar />} />
              <Route path="/safarnama" element={<Safarnama />} />
              <Route path="/rangrez" element={<Rangrez />} />
              <Route path="/viraas" element={<Viraas />} />
              <Route path="/phool" element={<Phool />} />
              <Route path="/anchal" element={<Anchal />} />
              <Route path="/anjaan" element={<Anjaan />} />
              <Route path="/dosti" element={<Dosti />} />
              <Route path="/phool-silk" element={<PhoolSilk />} />
              <Route path="/raang-lal" element={<RaangLal />} />
              <Route path="/zard" element={<Zard />} />
              <Route path="/safaid" element={<RangSafaid />} />
              <Route path="/kalidar" element={<Kalidar />} />
              <Route path="/sukoon" element={<Sukoon />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/brand-img" element={<BrandImg />} />
              <Route path="/saree" element={<Saree />} />
              <Route path="/pardes-edition" element={<PardesEdition />} />
              <Route path="/safar-nama-shop" element={<SafarNamaShop />} />
              <Route path="/khushbu" element={<Khushbu />} />
              <Route path="/formals" element={<Formals />} />
              <Route path="/rang" element={<Rang />} />
              <Route path="/basics" element={<Basics />} />
              <Route path="/binkhay" element={<BinKhay />} />
            </Routes>
          </Layout>

          {/* Toasts */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            transition={Slide}
            style={{ marginTop: "90px" }}
          />
        </Router>
      </CountryContext.Provider>
    </CartProvider>
  );
};

export default App;
