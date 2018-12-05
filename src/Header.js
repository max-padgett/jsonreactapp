import React, { PureComponent } from 'react';
import {Link, Route} from "react-router-dom";

class Header extends PureComponent {
    
    render() { 
        return ( 
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <Route path={"/form"} exact>
                <Link class="btn btn-success" style={{margin:'.5vh'}} to={"/form"}>Add</Link>
            </Route>
                
                <button class="btn btn-success" style={{margin:'.5vh'}} type="submit">Edit</button>
                <button class="btn btn-danger" style={{margin:'.5vh'}} type="submit">Delete</button>
            
        </nav> 
        );
    }
}
 
export default Header;