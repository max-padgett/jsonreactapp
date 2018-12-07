import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
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
            <div className="Login">
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
                            bsSize="sm"
                            ></FormControl>

                                <br/>

                        <Button type="submit">Login</Button>

                        <Route path={"/register"} exact>
                            <Link to={"/register"}>Not registered?</Link>
                        </Route>

                    </FormGroup>
                </form>
            </div>
         );
    }
}
 
export default Login;