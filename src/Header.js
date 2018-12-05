import React, { PureComponent } from 'react';
class Header extends PureComponent {
    
    render() { 
        return ( 
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <form class="form-inline" action="/action_page.php">
                <button class="btn btn-success" style={{margin:'.5vh'}} type="submit">Edit</button>
                <button class="btn btn-danger" style={{margin:'.5vh'}} type="submit">Delete</button>
            </form>
        </nav> 
        );
    }
}
 
export default Header;