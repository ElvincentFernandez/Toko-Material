// src/pages/AuthHandler.tsx

import React, { useEffect } from "react";
import { auth } from "../component/provider/firebase";
import { getRedirectResult } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Pastikan hasil redirect sudah didapatkan
    getRedirectResult(auth).then(async (result) => {
      if (result?.user) {
        const idToken = await result.user.getIdToken();

        console.log("ID Token:", idToken);

        // Kirim token ke backend (misal: loginSocial.php)
        await fetch("http://localhost/get/auth/signupSocial.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id_token: idToken }),
        });

        // Arahkan ke home page setelah login berhasil
        navigate("/"); // Redirect ke halaman utama
      }
    }).catch((err) => {
      console.error("Google login error:", err);
    });
  }, [navigate]); // Perhatikan dependency array di sini

  return <p>Loading... Sedang memproses login</p>;
};

export default AuthHandler;
