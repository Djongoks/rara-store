// src/pages/Admin.js
import React, { useState } from 'react';
import { db, auth, provider } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { signInWithPopup, signOut } from 'firebase/auth';

const Admin = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "products"), { name, price, image });
    setName('');
    setPrice('');
    setImage('');
    alert("Produk berhasil ditambahkan!");
  };

  return user ? (
    <div>
      <button onClick={logout}>Logout</button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nama Produk" />
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Harga" />
        <input type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="URL Gambar" />
        <button type="submit">Tambah Produk</button>
      </form>
    </div>
  ) : (
    <button onClick={loginWithGoogle}>Login dengan Google</button>
  );
};

export default Admin;
