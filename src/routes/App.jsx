import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";
import TestHeader from "../components/TestHeader";

function App() {
  return (
    <>
      {/* <Header /> */}
      <TestHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
