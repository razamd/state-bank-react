import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

// core components
import 'bootstrap/dist/css/bootstrap.css';
import AuthRouting from 'routing/AuthRouting';
import UserRouting from 'routing/UserRouting';
import PermissionRouting from 'routing/PermissionRouting';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pathname: '',
        };

        this.notifyPathname = this.notifyPathname.bind(this);
    }

    notifyPathname(pathname) {
        this.setState({
            pathname: pathname,
        })
    }
    
    
    render() {
        const accesToken=localStorage.getItem('token');
        if(!accesToken){
            return(
                <Router>
                    <AuthRouting></AuthRouting>              
                    <Redirect to="/login"/>
                </Router>
                
            )
        }
        else{
            return (
                <Router>
                    <AuthRouting></AuthRouting>
                    <UserRouting></UserRouting>
                    <PermissionRouting></PermissionRouting>                  
                </Router>
            )

        }
        
    }
}
export default App;
