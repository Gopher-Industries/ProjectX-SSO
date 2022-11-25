import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@Layout/Layout/Layout";

import Home from "@Screens/Home/Home";
import ContactUs from "@Screens/ContactUs/ContactUs";
import AboutUs from "@Screens/AboutUs/AboutUs";
import NotFound from "@Screens/NotFound/NotFound";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/contact-us"} element={<ContactUs />} />
                  <Route path={"/about-us"} element={<AboutUs />} />
                  <Route path={"*"} element={<NotFound />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
