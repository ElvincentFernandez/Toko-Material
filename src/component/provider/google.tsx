// src/components/GoogleLogin.tsx

import React, { useState } from 'react';
import { auth, googleProvider } from '../provider/firebase';
import { signInWithPopup } from 'firebase/auth';

const GoogleLogin: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
      console.log('User logged in:', user);
    } catch (error: any) {
      setError(error.message);
      console.error('Error during sign in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      console.log('User signed out');
    } catch (error: any) {
      setError(error.message);
      console.error('Error during sign out:', error);
    }
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleGoogleSignIn}>Login with Google</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default GoogleLogin;
