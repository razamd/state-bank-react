import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

// core components
import 'bootstrap/dist/css/bootstrap.css';
import Login from "components/Login/Login";
import AuthRouting from 'routing/AuthRouting';
import UserRouting from 'routing/UserRouting';

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
                <Login></Login>
            )
        }
        else{
            return (
                <Router>
                    <AuthRouting></AuthRouting>
                    <UserRouting></UserRouting>                  
                </Router>
            )

        }
        
    }
}
export default App;
