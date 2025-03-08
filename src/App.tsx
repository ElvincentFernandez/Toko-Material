import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderSearch } from "./Components/Home/Header/HeaderSearch";
import { MantineProvider } from "@mantine/core";
import { Outlet } from "react-router-dom"; // Import Outlet untuk layout
import { Hero } from "./Components/Home/Hero/Hero";
import { Content, Partner, Delivery, Kategori } from "./Components/Home";
import LoginCard from "./Auth/Login";

// Layout utama dengan Header
const Layout = () => (
  <>
    <HeaderSearch />
    <Outlet /> {/* Menampilkan komponen sesuai route */}
  </>
);

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          {/* Route dengan layout Header */}
          <Route element={<Layout />}>
            <Route path="/" element={<> <Hero /> <Content /> <Delivery /> <Partner /> </>} />
            <Route path="/kategori" element={<Kategori />} />
          </Route>
          <Route path="/Login" element={<LoginCard/>} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
