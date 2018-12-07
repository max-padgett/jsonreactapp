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

    onLogin(e){

    }

    render() { 
        return (
            <div className="LoginPage">
                <div className="Login">
                    <h1>To-Do List</h1>
                    <form>
                        <FormGroup controlId="email">
                            <ControlLabel>Email:</ControlLabel>
                                <FormControl
                                type="email"
                                value = {this.state.email}
                                placeholder=""
                                onChange={this.handleChange}
                                ></FormControl>

                                    <br/>

                            <ControlLabel>Password:</ControlLabel>
                                <FormControl
                                type="password"
                                value = {this.state.password}
                                placeholder=""
                                onChange={this.handleChange}
                                bsSize="sm"
                                ></FormControl>

                                    <br/>

                            <Button type="submit" className="btn btn-primary">Login</Button>

                                    <br/>

                            <Route path={"/register"} exact>
                                <Link to={"/register"}>Not registered?</Link>
                            </Route>

                        </FormGroup>
                    </form>
                </div>
            </div> 
         );
    }
}
 
export default Login;