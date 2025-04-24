// src/components/GoogleLogin.tsx

import React, { useEffect, useState } from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup, signOut, User } from 'firebase/auth';

const GoogleLogin: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Cek jika user sudah login sebelumnya
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const idToken = await user.getIdToken();

      // Kirim token ke backend untuk verifikasi
      const response = await fetch('http://localhost/get/auth/loginSocial.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: idToken }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login gagal');
      }

      // Simpan user ke state dan localStorage
      setUser(user);
      localStorage.setItem('user', JSON.stringify({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid
      }));

      console.log('Login berhasil:', data);
    } catch (err: any) {
      setError(err.message);
      console.error('Login error:', err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('user');
      console.log('User signed out');
    } catch (err: any) {
      setError(err.message);
      console.error('Logout error:', err);
    }
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleGoogleSignIn}>Login with Google</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default GoogleLogin;
