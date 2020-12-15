import axios from 'axios'
import { history } from '../index'
import { URL } from '../GenericService'
import {
    createRoleSuccess,
    createRoleError,
    editRoleSuccess,
    editRoleError,
    deleteRoleSuccess,
    deleteRoleError,
    fetchRolesLoading,
    fetchRolesError,
    fetchRolesSuccess,
    viewsRolesSuccess
} from '../actions/roleActions'


// CREATE------------------------------------------- 

export const createRole = (role) => {
    if (role._id) {
        const data = {
            id: role._id,
            name: role.name,
            description: role.description,
            displayName: role.displayName,
        };
        return (dispatch) => {
            dispatch(editRole(data));
        }

    }
    else {
        const data = {
            name: role.name,
            description: role.description,
            displayName: role.displayName,
            permissions: role.permissions,
        };
        return (dispatch) => {
            return axios.post(URL+'role/create', data)
                .then(response => {
                    console.log('response ',response)
                    const id = response.data._id;
                    console.log('response ', response.data);
                    dispatch(createRoleSuccess(response.data));
                    history.push('/admin/role');
                    
                }).catch(error => {
                    console.log(error)
                    const errorPayload = {};
                    dispatch(createRoleError(errorPayload))

                })
        }

    }

}

// EDIT---------------------------------------------------------------

export const editRole = (data) => {
    const id = data.id;

    const updateData = {
        name: data.name,
        description: data.description,
        displayName: data.displayName,
    }
    return (dispatch) => {
        return axios.post(URL+'role/update/'+id, updateData)
            .then(() => {
                return axios.get(URL+'role/view/'+id)
                    .then(response => {
                        dispatch(editRoleSuccess(response.data));
                        history.push('/admin/role')

                    }).catch(error => {
                        const errorPayload = {};
                        dispatch(editRoleError(errorPayload))

                    });

            }).catch((error) => {
                alert('erorrrrrrr')
                console.log('errorr ',error)
            })
    }
}

//DELETE-------------------------------------------------------------

export const deleteRole = (id) => {
    return (dispatch) => {
        return axios.get(URL+'role/delete/'+id)
            .then(() => {
                dispatch(deleteRoleSuccess(id));
                history.push('/admin/role')

            }).catch((error) => {
                console.log('error',error);

            })

    }
}

//FETCH--------------------------------------------------------------

export const fetchRoles = () => {
    let isLoading = true;
    return (dispatch) => {
        dispatch(fetchRolesLoading(isLoading));
        return axios.get(URL+'role/getAll')
            .then(response => {
                dispatch(fetchRolesSuccess(response.data.body));
                console.log('roles',response.data);
                isLoading = false;
                dispatch(fetchRolesLoading(isLoading));

            }).catch(error => {
                console.log('eror',error)

            })
    };
}
//FETCH with pagination--------------------------------------------------------------

export const fetchRolesWithPagination = (data) => {
    console.log(URL);
    return (dispatch) => {
        return axios.post(URL+'role/views',data)
            .then(response => {
                dispatch(viewsRolesSuccess(response.data));              
                console.log('roles with paigination ',response.data);
            }).catch(error => {
                console.log('eror',error)

            })
    };
}