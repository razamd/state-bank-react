import Roles from 'components/Role/Roles'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

export default class RoleRouting extends Component {
    render() {
        return (
            <Switch>
                <Route path="/admin/role/" component={Roles} />
            </Switch>
        )
    }
}
