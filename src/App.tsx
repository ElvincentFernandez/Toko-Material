import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderSearch } from "./Components/Home/Header/HeaderSearch";
import { Hero } from "./Components/Home/Hero/Hero";
import Content from "./Components/Home/Content/Content";
import Partner from "./Components/Home/Client/Partner";
import { MantineProvider } from "@mantine/core";
import Delivery from "./Components/Home/Delivery/Delivery";
import Kategori from "./Components/Home/Navbar/Category/Kategori";
import { Outlet } from "react-router-dom"; // Import Outlet untuk layout

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
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
