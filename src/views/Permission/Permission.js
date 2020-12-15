import React from 'react'

const Permission = ({ permission, onEdit,onDelete }) => {
    return (
        <tr>
            <td>{permission.name}</td>
            <td>{permission.action}</td>
            <td>{permission.url}</td>
            <td>
                <button type="button" className="btn btn-danger"
                    onClick={() => onDelete(permission._id)}
                >
                    Delete
                 </button>
                <button type="button" className="btn btn-default"
                    onClick={() => onEdit(permission)}>
                    Edit
               </button>
            </td>
        </tr>      
        
    )

}
export default Permission
