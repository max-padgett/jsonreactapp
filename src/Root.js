import React, { Component } from 'react';
import JsonComp from "./JsonComp";
import FormCard from "./FormCard";
import Header from "./Header";

class Root extends Component {
    
    render() { 
        return ( 
        <div className="App">
            <Header/>
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
 
export default Root;