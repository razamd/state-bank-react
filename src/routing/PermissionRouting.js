import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Permissions from 'components/Permissions/Permissions'

export default class PermissionRouting extends Component {
    render() {
        return (
            <Switch>
                <Route path="/admin/permission/" component={Permissions} />
            </Switch>
        )
    }
}
