import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Login extends Component {
    
    constructor(props, context){
        super(props,context);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){

    }

    render() { 
        return ( 
            <div>
                <form>
                    <FormGroup controlId="email">
                    <ControlLabel></ControlLabel>

                    </FormGroup>
                </form>
                <label>UserName: </label> 
                <input type="text"></input>
                <br/>
                <label>Password: </label> 
                <input type="text"></input>
                <br/>
                <button type="submit">Login</button>
            </div>
         );
    }
}
 
export default Login;