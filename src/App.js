import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

//components
import ButtonAppBar from "./components/appbar/AppBar";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cover from "./components/cover/Cover";
import ExpenseList from "./pages/form/OnlineList";
import Response from "./components/response/response";

//pages
import Home1 from "./pages/home/home1";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import UpdatePage from "./components/update/UpdatePage";

// Data Provider
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <ButtonAppBar />
        <NavBar />
        <Routes>
          <Route index element={<Home1 />} />
          <Route path="dashboard" element={<Cover />} />
          <Route path="response" element={<Response />} />
          <Route path="about" element={<About />} />
          <Route path="update" element={<UpdatePage />} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
