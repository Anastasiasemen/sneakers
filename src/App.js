
import React from "react";

import Navbar from "./components/Navbar.js"
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import PaymentPage from './Pages/PaymentPage';
import RegistrationPage from './Pages/RegistrationPage';
import AccountPage from './Pages/AccountPage';
import ProductPage from './Pages/ProductPage';

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      <div className="content">
        <Route path= "/" component={ HomePage } exact />
        <Route path= "/cart" component={ CartPage } exact />
        <Route path= "/payment" component={ PaymentPage } exact />
        <Route path= "/registration" component={ RegistrationPage } exact />
        <Route path= "/account" component={ AccountPage } exact />
        <Route path= "/product:id" component={ ProductPage } exact />
      </div>
    </div>
  );
}

export default App;
