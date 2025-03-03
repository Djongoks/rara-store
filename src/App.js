import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Footer from "./components/Footer";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={user ? <Admin /> : <Navigate to="/admin-login" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
