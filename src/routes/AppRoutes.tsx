import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddTransactions from "../pages/AddTransactions";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addtransactions" element={<AddTransactions />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
