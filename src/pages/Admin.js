import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cek apakah user sudah login
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate("/admin-login"); // Redirect ke login jika belum login
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin-login"); // Kembali ke login setelah logout
  };

  if (!user) return <p>Memuat...</p>;

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Halo, {user.email}!</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Tambahkan fitur upload produk di sini */}
    </div>
  );
};

export default Admin;
