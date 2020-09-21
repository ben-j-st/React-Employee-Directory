import React from "react";
import "./style.css";
import Dropdown from 'react-bootstrap/Dropdown';

function SortOptions(props) {
    return (
        <div>
            <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onSelect= { () => 
                    props.handleSortSelect("firstName")
                }>First Name</Dropdown.Item>
                <Dropdown.Item onSelect= { () => 
                    props.handleSortSelect("lastName")
                }>Last Name</Dropdown.Item>
                <Dropdown.Item onSelect= { () => 
                    props.handleSortSelect("gender")
                }>Gender</Dropdown.Item>
                <Dropdown.Item onSelect={ () =>
                    props.handleSortSelect("department")
                }>Department</Dropdown.Item>
                <Dropdown.Item onSelect={ () =>
                    props.handleSortSelect("jobTitle")
                }>Job Title</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    );
}

export default SortOptions;