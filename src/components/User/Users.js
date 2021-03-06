import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers, deleteUser, createUser } from 'apiHandler/userApiHandler'
import User from 'views/User/User';
import { Link } from 'react-router-dom';
import { fetchRoles } from 'apiHandler/roleApiHandler';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: 0,
            name: '',
            username: '',
            email: '',
            password: '',
            btn: 'Save',
            roleId: '',
        }
    }

    componentWillMount() {
        this.props.onFetch();
    }
    handleEdit(user) {
        this.setState({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password,
            roleId:user.roleId,
            btn: 'Edit',
        })
        if(user.roleId){
            alert('Role name '+user.roleId.name)
        }
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
    handleRoleChange(e) {
        this.setState({
            roleId: e.target.value
        })
    }
    handleReset(e) {
        e.preventDefault();
        this.setState({
            _id: 0,
            name: '',
            username: '',
            email: '',
            password: '',
            roleId:'',
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
                                name="username"
                                placeholder="Enter User Name"
                                required
                                value={this.state.username}
                                onChange={this.handleValueChnage.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleValueChnage.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.handleValueChnage.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <select class="form-control" onChange={this.handleRoleChange.bind(this)}>
                                <option >Select Role</option>
                                {
                                    this.props.roles.map(role => {
                                        return (
                                            <option value={role._id}>{role.name}</option>
                                        )
                                    })
                                }
                            </select>
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
                <Link to="/admin/user/create">Add new User</Link>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.props.users.map(user => {
                                return (
                                    <User key={user._id}
                                        user={user}
                                        onEdit={this.handleEdit.bind(this)}
                                        onDelete={this.props.onDelete}
                                    >
                                    </User>
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
        users: state.usersData.users || [],
        roles: state.rolesData.roles || [],
        error: state.usersData.error || null,
        isLoading: state.usersData.isLoading,

    }
}
const mapeDistpatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchUsers());
            dispatch(fetchRoles());
        },
        onDelete: (id) => {
            dispatch(deleteUser(id));
        },
        onAdd: (user) => {
            dispatch(createUser(user));
        }
    }
}
export default connect(mapStateToProps, mapeDistpatchToProps)(Users);
