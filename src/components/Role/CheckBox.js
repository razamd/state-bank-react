import React from 'react'

export const CheckBox = props => {
    return (
      <li>
       <input key={props.id} onClick={props.handleCheckBox} type="checkbox" checked={true} value={props.value} /> {props.value}
      </li>
    )
}

export default CheckBox