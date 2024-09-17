import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Admin_login from "../Admin_login";
import Customer_login from "../Customer_login";
import Login from "../Login";
import Staff_login from "../Staff_login";

function Router() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/admin" element={<Admin_login />} />
          <Route exact path="/customer" element={<Customer_login />} />
          <Route exact path="/staff" element={<Staff_login />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default Router;
