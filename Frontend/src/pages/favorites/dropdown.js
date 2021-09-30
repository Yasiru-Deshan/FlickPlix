import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

function DropdownMenu(props) {
    return (
        <div>
             <Dropdown.Item href="#/action-1">{props.name}</Dropdown.Item>
        </div>
    )
}

export default DropdownMenu
