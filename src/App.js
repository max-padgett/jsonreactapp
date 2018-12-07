import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Root from "./Root";
import './App.css';
import FormCard from './FormCard';
import Header from './Header';
import Login from './Login';
import Register from './Register';


class App extends Component {

  

  render() {
    return (
      
        <BrowserRouter>
          <switch>
            <Route  path={'/'} component={Login} exact/>
            <Route  class="btn btn-success" style={{margin:'.5vh'}} path={'/form'} component={FormCard}/>
            <Route  path={'/register'} component={Register} exact/>
            <Route  path={'/login'} component={Login} exact/>
          </switch>
        </BrowserRouter>
       
    );
  }
}

export default App;
