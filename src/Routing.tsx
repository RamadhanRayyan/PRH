import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import App from "./App";
import Implementation from "./components/ImplementasiDetail";
import ImplementasiSummary from "./ImplementasiSummary"; // ✅ tambahkan ini

// ✅ ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export const Routing = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <App />
            </PageWrapper>
          }
        />

        {/* ✅ Halaman implementasi utama */}
        <Route
          path="/implementasi"
          element={
            <PageWrapper>
              <ImplementasiSummary />
            </PageWrapper>
          }
        />

        {/* ✅ Halaman detail implementasi */}
        <Route
          path="/implementasi-detail"
          element={
            <PageWrapper>
              <Implementation />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

// 🔥 Wrapper animasi untuk setiap page
import { ReactNode } from "react";

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
