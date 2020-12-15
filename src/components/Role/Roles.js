import { createRole, deleteRole, fetchRoles, fetchRolesWithPagination } from 'apiHandler/roleApiHandler';
import { fetchPermissions } from 'apiHandler/permissionApiHandler';
import React, { Component } from 'react'
import Role from 'views/Role/Role';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import Pagination from 'react-js-pagination';

class Roles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: 0,
            name: '',
            displayName: '',
            description: '',
            btn: 'Save',
            permissions: [],
            columns: [
                { dataField: "name", text: "Role" },
                { dataField: "displayName", text: "Name" },
                { dataField: "description", text: "Description" }
            ],
            data: {
                "page": 1,
                "limit": 5,
                "sort": { "_id": "asc" },
                "name": ""
            },
            totalRecords: 0

        };

    }
    handleCheckBox = (event) => {
        this.props.permissions.forEach(permission => {
            if (permission.name === event.target.value) {
                permission.isChecked = event.target.checked
                if (permission.isChecked) {
                    this.state.permissions.push(permission._id);
                }
                else {
                    const index = this.state.permissions.indexOf(permission._id);
                    if (index > -1) {
                        this.state.permissions.splice(index, 1);
                    }
                }
            }
        })
    }
    componentWillMount() {
        this.props.onFetch();
        this.props.fetchPagination(this.state.data);
    }
    handleEdit(role) {
        this.setState({
            _id: role._id,
            name: role.name,
            displayName: role.displayName,
            description: role.description,
            btn: 'Edit',
        })

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state);
    }

    handleValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleReset(e) {
        e.preventDefault();
        this.setState({
            _id: 0,
            name: '',
            displayName: '',
            description: '',
            btn: 'Save',

        });
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({
            activePage: pageNumber,
        });
        const data = {
            "page": pageNumber,
            "limit": 5,
            "sort": { "_id": "asc" },
            "name": ""
        }
        this.props.fetchPagination(data);
        
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
                                placeholder="Enter Role"
                                value={this.state.name}
                                required
                                onChange={this.handleValueChange.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="displayName"
                                placeholder="Enter Display Name"
                                required
                                value={this.state.displayName}
                                onChange={this.handleValueChange.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                                placeholder="Enter Description"
                                value={this.state.description}
                                onChange={this.handleValueChange.bind(this)}
                            />
                        </div>
                        <b> Permissions </b><br></br>
                        {
                            this.props.permissions.map(permission => {
                                return (
                                    <label>
                                        <Checkbox
                                            key={permission._id}
                                            name="permisions"
                                            onChange={this.handleCheckBox}
                                            value={permission.name}
                                        />{permission.name}
                                    </label>
                                )
                            })
                        }
                        <br></br>
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

                </div><br></br><br></br><br></br>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Display Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            this.props.views.docs &&
                            this.props.views.docs.map(role => {
                                return (
                                    <Role key={role._id}
                                        role={role}
                                        onEdit={this.handleEdit.bind(this)}
                                        onDelete={this.props.onDelete}
                                    >
                                    </Role>
                                )
                            })     
                        }
                    </tbody>
                </table>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={this.props.views.totalDocs}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        roles: state.rolesData.roles || [],
        permissions: state.permissionsData.permissions || [],
        error: state.rolesData.error || null,
        isLoading: state.rolesData.isLoading,
        views: state.rolesData.views.body || []
    }
}
const mapDistpatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchRoles());
            dispatch(fetchPermissions())
        },
        fetchPagination: (data) => {
            dispatch(fetchRolesWithPagination(data));
        },

        onDelete: (id) => {
            dispatch(deleteRole(id));
        },
        onAdd: (role) => {
            dispatch(createRole(role));
        }
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(Roles);
