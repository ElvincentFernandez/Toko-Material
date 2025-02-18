import React from "react";
import { HeaderSearch } from "./Components/Header/HeaderSearch";
import Contact from "./Components/Content/Content";
import { MantineProvider } from '@mantine/core';
import { Hero } from "./Components/Hero/Hero";
import Delivery from "./Components/Delivery/Delivery";

function App() {
  return (
    <MantineProvider>
      <HeaderSearch />
      <Hero/>
      <Contact/>
      <Delivery/>
    </MantineProvider>

  );
}

export default App;
