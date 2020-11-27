import { LOGIN } from '../actions/loginActions';

const defaultState = {
    login: {}
}


const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, login: action.payload }
        default:
            return state
    }

}

export default loginReducer;