import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderSearch } from "./component/Home/Header/HeaderSearch";
import { MantineProvider } from "@mantine/core";
import { Hero } from "./component/Home/Hero/Hero";
import { Content, Partner, Delivery, Kategori, Footer } from "./component/Home";
import { AuthRoutes } from "./auth/AuthRoutes";

function App() {
  return (
    <MantineProvider>
      <Router>
        {/* Header statis di semua halaman */}
        <HeaderSearch />

        <Routes>
          <Route path="/" element={<><Hero /> <Content /> <Delivery /> <Partner /></>} />
          <Route path="/kategori" element={<Kategori />} />
          {AuthRoutes}
        </Routes>

        <Footer />
      </Router>
    </MantineProvider>
  );
}

export default App;
