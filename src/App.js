import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Root from "./Root";
import './App.css';


class App extends Component {

  

  render() {
    return (
      
        <BrowserRouter>
          <Route path={'/'} component={Root}/>
        </BrowserRouter>
       
    );
  }
}

export default App;
