import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Halaman admin");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/admin-login"); // Kalau belum login, arahkan ke login
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin-login");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Selamat datang, {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Admin;
