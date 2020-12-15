import axios from 'axios'
import { history } from '../index'
import { loginURL } from '../GenericService'
import { loginError } from 'actions/loginActions.js'


// CREATE-------------------------------------------

export const loginTo = (login) => {
    const data = {
        username: login.email,
        password: login.password,
    };
    return (dispatch) => {
        return axios.post(loginURL, data)
            .then(response => {
                const data = response.data;
                const token = data.token;
                console.log(data)
                if (data.success===false) {
                    const errorPayload = {};
                    errorPayload['error'] = data.error;
                    dispatch(loginError(errorPayload))
                }
                localStorage.setItem('token', token)
                if (token) {
                    history.push('/admin/dashboard')
                }
            }).catch(error => {
                console.log('Error', error.response)
            });
    }
}