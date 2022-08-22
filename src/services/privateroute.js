import React from 'react';
import {Route} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Navigate } from "react-router-dom";



 const authenticated = () =>{
    if(sessionStorage.getItem("prihlasen")){
        return "true";
    }else {
        return null;
    }
  
 }

export const PrivateRoute = ({children, ...rest}) => {
    
    return(
      <Route {...rest} render={(props) => {
       
        return authenticated() === "true"
        ? children
        : <Navigate to={{
            pathname: "/login",
            state: { property_id: rest.warning }
          }} />
      }} />
    );
  }