// src/routes/AuthRoutes.tsx
import { Route } from "react-router-dom";
import { LoginCard, Signup } from ".";
import AuthHandler from "./AuthHandler";

export const AuthRoutes = [
  <Route key="login" path="/login" element={<LoginCard />} />,
  <Route key="signup" path="/signup" element={<Signup />} />,
  // Mengarahkan AuthHandler ke /auth-handler
  <Route key="authhandler" path="/auth-handler" element={<AuthHandler />} />,
];
