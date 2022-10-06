import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import DashBoard from "../page/DashBoard";
import Header from "../component/Header";
import Footer from "../component/Footer";
import LoginPage from "../page/LoginPage";
import ExplorePage from "../page/ExplorePage";
import ContactUsPage from "../page/ContactUsPage";

const AppRoute = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/*" element={<Home />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/dashBoard" element={<DashBoard />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/explore" element={<ExplorePage />}></Route>
          <Route exact path="/contact" element={<ContactUsPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRoute;
