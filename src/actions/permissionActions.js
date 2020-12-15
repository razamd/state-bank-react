export const ADD_PERMISSION_SUCCESS = 'ADD_PERMISSION_SUCCESS';

export const DELETE_PERMISSION_SUCCESS = 'DELETE_PERMISSION_SUCCESS';

export const EDIT_PERMISSION_SUCCESS = 'EDIT_PERMISSION_SUCCESS';

export const FETCH_PERMISSION_SUCCESS = 'FETCH_PERMISSION_SUCCESS';


//CREATE ACTION METHODS
export const createPermissionsSuccess = (data) => {
    return {
        type: ADD_PERMISSION_SUCCESS,
        payload: data,
    }
}
//EDIT ACTION METHODS
export const editPermissionsSuccess = (data) => {
    return {
        type: EDIT_PERMISSION_SUCCESS,
        payload: data,
    }
};

//DELETE ACTION METHODS
export const deletePermissionsSuccess = (id) => {
    return {
        type: DELETE_PERMISSION_SUCCESS,
        payload: id,
    }
}
//FETCH ACTION METHODS
export const fetchPermissionsSuccess = (data) => {
    return {
        type: FETCH_PERMISSION_SUCCESS,
        payload: data,
    }
}
