import ReactDOM from "react-dom";
import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
class Selection extends React.Component {

  sendName = (event) => {
    
    
    event.preventDefault();

    const data = new FormData(event.target);
   


    }
  render() {
    return (
      <div>
          <h1>Zadejte nazev farmy:</h1>
        <form onSubmit= {this.sendName}>
          
        <FormControl size="medium" >
          <InputLabel htmlFor="my-input">Nazev farmy</InputLabel>
          <Input id="my-input" name="farma_name" aria-describedby="my-helper-text" />  
               <br></br>
          <Button type="submit" color="success" variant="contained">
          Zvolit
        </Button>
        </FormControl>
        </form>
   <div>

   </div>
        
      </div>
    );
  }
}

export default Selection;
