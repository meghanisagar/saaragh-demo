import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  Home,
  ContactUs,
  AboutUs,
  Product,
  Footer,
} from "./Pages/Index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter className={"root"}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<>No Page Found...</>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
