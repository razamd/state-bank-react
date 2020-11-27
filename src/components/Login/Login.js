import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loginTo} from 'apiHandler/loginApiHandler'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state);

    }
    handleValueChnage(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {
        return (
            <div class="d-flex justify-content-center">
                <form onSubmit={this.handleLoginSubmit.bind(this)}>
                    <h3>Login</h3>
                    <div className="form-group">
                        <label>User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter User Name"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleValueChnage.bind(this)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleValueChnage.bind(this)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        error: state.loginData.error,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (login) => {
            dispatch(loginTo(login));
        }

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

