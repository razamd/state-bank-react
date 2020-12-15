import {
    ADD_PERMISSION_SUCCESS,
    EDIT_PERMISSION_SUCCESS,
    DELETE_PERMISSION_SUCCESS,
    FETCH_PERMISSION_SUCCESS
} from '../actions/permissionActions';

const defaultState = {
    permissions: [],
}

const permissionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PERMISSION_SUCCESS:
            return { ...state, permissions: [...state.permissions, action.payload] }
        case EDIT_PERMISSION_SUCCESS:
            const updatedPermissions = state.permissions.filter(permission => permission.id != action)
            return { ...state, permissions: [...updatedPermissions, action.payload] };
        case DELETE_PERMISSION_SUCCESS:
            const filteredPermissions = state.permissions.filter(permission => permission.id != action.payload)
            return { ...state, permissions: filteredPermissions };
        case FETCH_PERMISSION_SUCCESS:
            return { ...state, permissions: action.payload }
        default:
            return state;
    }
}
export default permissionReducer;