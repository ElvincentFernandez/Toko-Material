import React from "react";
import { HeaderSearch } from "./Components/Header/HeaderSearch";
import { Hero } from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Partner from "./Components/Client/Partner";
import { MantineProvider } from '@mantine/core';
import Delivery from "./Components/Delivery/Delivery";

function App() {
  return (
    <MantineProvider>
      <HeaderSearch />
      <Hero/>
      <Content/>
      <Delivery/>
      <Partner/>
    </MantineProvider>

  );
}

export default App;
