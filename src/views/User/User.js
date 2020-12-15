import React, { Component } from 'react'

const User = ({ user, onEdit,onDelete }) => {
    if(user.roleId){
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.roleId.name}</td>
                {
                
                }
                <td>
                    <button type="button" className="btn btn-danger"
                        onClick={() => onDelete(user._id)}
    
                    >
                        Delete
                     </button>
                    <button type="button" className="btn btn-default"
                        onClick={() => onEdit(user)}>
                        Edit
                   </button>
                </td>
            </tr>      
            
        )

    }
    else{
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td></td>
                {
                
                }
                <td>
                    <button type="button" className="btn btn-danger"
                        onClick={() => onDelete(user._id)}
    
                    >
                        Delete
                     </button>
                    <button type="button" className="btn btn-default"
                        onClick={() => onEdit(user)}>
                        Edit
                   </button>
                </td>
            </tr>      
            
        )
    }
    

}
export default User
