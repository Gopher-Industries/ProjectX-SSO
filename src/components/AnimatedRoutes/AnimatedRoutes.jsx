import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";

import Layout from "@Layout/Layout/Layout";
import Home from "@Screens/Home/Home";
import Signup from "@Screens/Signup/Signup";

import {AnimatePresence } from "framer-motion";

const AnimatedRoutes = (props) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route element={<Layout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/signup"} element={<Signup />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
