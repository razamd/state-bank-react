import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from "components/User/Users";

export default class UserRouting extends Component {
    render() {
        return (
            <Switch>
                <Route path="/admin/user/" component={Users} />
            </Switch>
        )
    }
}
