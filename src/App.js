import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Root from "./Root";
import './App.css';
import FormCard from './FormCard';


class App extends Component {

  

  render() {
    return (
      
        <BrowserRouter>
          <switch>
            <Route  path={'/'} component={Root} exact/>
            <div>
            <Route  class="btn btn-success" style={{margin:'.5vh'}} path={'/form'} component={FormCard}/>
            </div>
          </switch>
        </BrowserRouter>
       
    );
  }
}

export default App;
