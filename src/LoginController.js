import React, { Component } from 'react';

class LoginController extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn: false
         }
    }
    render() { 
        return ( 
            <label>I am LoginController</label>
         );
    }
}
 
export default LoginController;