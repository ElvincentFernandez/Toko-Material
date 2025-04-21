import { Route } from "react-router-dom";
import { LoginCard, Signup } from "../Auth";

export const AuthRoutes = [
  <Route key="login" path="/login" element={<LoginCard />} />,
  <Route key="register" path="/register" element={<Signup />} />,
];
