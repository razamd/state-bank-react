import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import Login from 'components/Login/Login'
import Admin from 'views/Admin/Admin'

export default class AuthRouting extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/admin" component={Admin} />
                <Redirect from="/" to="/login" />
            </Switch>            
        )
    }
}
