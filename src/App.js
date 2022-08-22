import logo from "./logo.svg";
import "./App.css";

import Login from "./components/login/login";
import Register from "./components/register/register";
import Staj from "./components/staj/Staj";
import Zvire from "./components/zvire/Zvire";
import AppWrapper from "./components/dashboard/appwrapper";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./styly.css";
import StajDetail from "./components/staj/StajDetail";
import Prehled from "./components/prehled/Prehled";
import Zvirata from "./components/zvirata/Zvirata";
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Navigate } from "react-router-dom";
import React, { Component } from "react";

function PrivateRoute({ children }) {
  const auth = sessionStorage.getItem("prihlasen");
  return auth ? children : <Navigate to="/login" />;
}



function App() {
  return (
    
    <div className="App">

        <React.StrictMode>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/registrace" element={<Register/>}/>
        <Route path="/staj" element={<AppWrapper> </AppWrapper>}>
            <Route path="" element={<Staj />} /> 
            <Route path="/staj/:int" element={<StajDetail />} />
          </Route>

          <Route path="/zvirata" element={<AppWrapper></AppWrapper>}>
          <Route path="" element={<Zvirata />} />
         
          </Route>

          <Route path="/prehled" element={<AppWrapper></AppWrapper>}>
          <Route path="" element={<Prehled />} />
          </Route>

          <Route path="/zvire/:int" element={<AppWrapper> </AppWrapper>}>
          <Route path="" element={<Zvire/>} />
          </Route>

        </Routes>
      </BrowserRouter>
      </React.StrictMode>
   
    </div>
  );
}

export default App;
