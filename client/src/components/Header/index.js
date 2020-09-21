import React from "react";
import "./style.css";

function Header () {
    return (
        <div className="header">
            <div className="header-text">
                <h1>Employee Directory</h1>
                <p>Please Type In Employees Name Or Use The Sort Dropdown Menu To Sort Employees 
                    Alphabetically By The Specified Category</p>
            </div>
        </div>
    )
}

export default Header;