import { LOGIN, LOGIN_ERROR } from '../actions/loginActions';

const defaultState = {
    login: {},
    error: null
}


const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, login: action.payload }
        case LOGIN_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }

}

export default loginReducer;