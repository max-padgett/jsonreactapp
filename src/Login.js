import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Login extends Component {
    
    constructor(props, context){
        super(props,context);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email:"",
            password:""
        };
    }

    handleChange(e){

    }

    render() { 
        return ( 
            <div>
                <form>
                    <FormGroup controlId="email">
                    <ControlLabel>Enter Email:</ControlLabel>
                     <FormControl
                     type="email"
                     value = {this.state.email}
                     placeholder=""
                     onChange={this.handleChange}
                     ></FormControl>
                     <ControlLabel>Enter Password:</ControlLabel>
                     <FormControl
                     type="password"
                     value = {this.state.password}
                     placeholder=""
                     onChange={this.handleChange}
                     ></FormControl> 
                    </FormGroup>
                </form>
            </div>
         );
    }
}
 
export default Login;