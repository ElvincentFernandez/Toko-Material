import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderSearch } from "./Components/Home/Header/HeaderSearch";
import { MantineProvider } from "@mantine/core";
import { Hero } from "./Components/Home/Hero/Hero";
import { Content, Partner, Delivery, Kategori } from "./Components/Home";
import { LoginCard, Signup } from "./Auth";
import Footer from "./Components/Home/Footer/Footer";

function App() {
  return (
    <MantineProvider>
      <Router>
        {/* Header statis di semua halaman */}
        <HeaderSearch />

        <Routes>
          <Route path="/" element={<><Hero /> <Content /> <Delivery /> <Partner /></>} />
          <Route path="/kategori" element={<Kategori />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/register" element={<Signup />} />
        </Routes>

        <Footer />
      </Router>
    </MantineProvider>
  );
}

export default App;
