import axios from 'axios'
import { URL } from '../GenericService'
import { history } from '../index'
import {
    createPermissionsSuccess,
    editPermissionsSuccess,
    deletePermissionsSuccess,
    fetchPermissionsSuccess
} from '../actions/permissionActions'

// CREATE------------------------------------------- 

export const createPermission = (permission) => {
    if (permission._id) {
        const data = {
            id: permission._id,
            name: permission.name,
            action: permission.action,
            url: permission.url,
        };
        return (dispatch) => {
            dispatch(editPermission(data));
        }

    }
    else {
        const data = {
            name: permission.name,
            action: permission.action,
            url: permission.url,
        };
        return (dispatch) => {
            return axios.post(URL+'permission/create', data)
                .then(response => {
                    console.log('response ',response)
                    const id = response.data._id;
                    console.log('response ', response.data);
                    dispatch(createPermissionsSuccess(response.data));
                    history.push('/admin/permission');
                    
                }).catch(error => {
                    console.log(error)

                })
        }

    }

}

// EDIT---------------------------------------------------------------

export const editPermission = (data) => {
    const id = data.id;

    const updateData = {
        name: data.name,
        action: data.action,
        url: data.url,
    }
    return (dispatch) => {
        return axios.post(URL+'permission/update/'+id, updateData)
            .then(() => {
                return axios.get(URL+'permission/view/'+id)
                    .then(response => {
                        dispatch(editPermissionsSuccess(response.data));
                        history.push('/admin/permission');

                    }).catch(error => {
                        console.log('errorr ',error)
                    });

            }).catch((error) => {
                console.log('errorr ',error)
            })
    }
}

//DELETE-------------------------------------------------------------

export const deletePermission = (id) => {
    return (dispatch) => {
        return axios.get(URL+'permission/delete/'+id)
            .then(() => {
                dispatch(deletePermissionsSuccess(id));
                history.push('/admin/permission');
            }).catch((error) => {
                console.log('error',error);

            })

    }
}

// FETCH--------------------------------------------------------------
export const fetchPermissions = () => {
    return (dispatch) => {
        return axios.get(URL+'permission/getAll')
            .then(response => {
                dispatch(fetchPermissionsSuccess(response.data.body));
                console.log('Permisions',response.data);

            }).catch(error => {
                console.log('eror',error)

            })
    };
}