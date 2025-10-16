import { useEffect, ReactNode } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import App from "./App";
import Implementation from "./pages/ProyekBelakang";
import ImplementasiSummary from "./components/ProyekDepan";
import { About } from "./components/About";
import { Publications } from "./components/Publications";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [hash]);

  return null;
}

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
        <Route
          path="/implementasi"
          element={
            <PageWrapper>
              <ImplementasiSummary />
            </PageWrapper>
          }
        />
        <Route
          path="/implementasi-detail"
          element={
            <PageWrapper>
              <Implementation />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
                <Route
          path="/publikasi"
          element={
            <PageWrapper>
              <Publications />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
