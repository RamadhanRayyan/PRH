import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import App from "./App";
import Implementation from "./Implementation";

export const Routing = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
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
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}   // posisi awal (geser dikit + transparan)
      animate={{ opacity: 1, x: 0 }}    // posisi masuk
      exit={{ opacity: 0, x: -50 }}     // posisi keluar
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
