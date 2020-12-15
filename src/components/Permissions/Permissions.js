import { createPermission,deletePermission,fetchPermissions } from 'apiHandler/permissionApiHandler';
import React, { Component } from 'react'
import Permission from 'views/Permission/Permission';
import { connect } from 'react-redux';

class Permissions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: 0,
            name: '',
            action: '',
            url: '',
            btn: 'Save',

        }

    }
    componentWillMount() {
        this.props.onFetch();
    }
    handleEdit(permission) {
        this.setState({
            _id: permission._id,
            name: permission.name,
            action: permission.action,
            url: permission.url,
            btn: 'Edit',
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state);
    }

    handleValueChnage(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleReset(e) {
        e.preventDefault();
        this.setState({
            _id: 0,
            name: '',
            action: '',
            url: '',
            btn:'Save',

        });
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter Name"
                                value={this.state.name}
                                required
                                onChange={this.handleValueChnage.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="action"
                                placeholder="Enter Action"
                                required
                                value={this.state.action}
                                onChange={this.handleValueChnage.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="url"
                                placeholder="Enter URL"
                                value={this.state.url}
                                onChange={this.handleValueChnage.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                {this.state.btn}
                            </button>
                            <button type="button" className="btn btn-default"
                                onClick={this.handleReset.bind(this)}>
                                Cancel
                    </button>

                        </div>
                    </form>

                </div><br></br><br></br>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                            <th>URL</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.props.permissions.map(permission => {
                                return (
                                    <Permission key={permission._id}
                                        permission={permission}
                                        onEdit={this.handleEdit.bind(this)}
                                        onDelete={this.props.onDelete}
                                    >
                                    </Permission>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        permissions: state.permissionsData.permissions || [],
    }
}
const mapDistpatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchPermissions())
        },

        onDelete: (id) => {
            dispatch(deletePermission(id));
        },
        onAdd: (permission) => {
            dispatch(createPermission(permission));
        }
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(Permissions);
