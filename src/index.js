import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home";
import Instrumentos from "./pages/instrumentos";
import Header from "./components/Header";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");

render(
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="instrumentos" element={<Instrumentos />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>,
  rootElement
);