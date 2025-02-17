import React from "react";
import { HeaderSearch } from "./Components/Header/HeaderSearch";
import Contact from "./Components/Content/Content";
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <HeaderSearch />
      <Contact/>
    </MantineProvider>

  );
}

export default App;
