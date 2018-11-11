import React, { Component } from 'react';
import JsonComp from "./JsonComp";
import FormCard from "./FormCard"
import './App.css';


class App extends Component {

  constructor(props)
  {
    super(props);

  }
  

  render() {
    return (
      <div className="App">

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <form class="form-inline" action="/action_page.php">
            <button class="btn btn-success" style={{margin:'.5vh'}} type="submit">Edit</button>
            <button class="btn btn-danger" style={{margin:'.5vh'}} type="submit">Delete</button>
          </form>
        </nav>
      
        <div id="1" className="CardContainer">
          <FormCard/>
          <JsonComp priority="1"/>
        </div>
        <div id="2" className="CardContainer">
          <FormCard/>
          <JsonComp priority="2"/>
        </div>
        <div ref={this.cont3} className="CardContainer">
          <FormCard/>
          <JsonComp priority="3"/>
        </div>
      </div>
    );
  }
}

export default App;
