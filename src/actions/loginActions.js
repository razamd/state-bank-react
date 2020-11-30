export const LOGIN = 'LOGIN';
export const LOGIN_ERROR ='LOGIN_ERROR';

export const loginSuccess = (data) => {
    return {
        type: LOGIN,
        payload: data,
    }
}
export const loginError = (data) => {
    return {
        type: LOGIN_ERROR,
        payload: data,
    }
}