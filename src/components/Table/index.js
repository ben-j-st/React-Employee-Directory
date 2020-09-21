import React from "react";
import Row from "../Row";
import "./style.css";

// object destructuring
function Table({employees, results}) {

    const [employeeArray, setEmployeeArray] = React.useState([]);

    // Will only run if there are changes to dependencies
    React.useEffect(() => {
        if (results.length > 0) {
            setEmployeeArray(results);
        } else {
            setEmployeeArray(employees);
        }

        console.log("running");
        
        // Dependencies - all used inside the function
    }, [setEmployeeArray, results, employees])

    return (
        <div className="tableBlock">
            <table
                id="table"
                className="table table-hover table-condensed"
            >
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Job Title</th>
                    </tr>
                </thead>

                {employeeArray.map(employee => <Row key={employee.id} employee={employee} />)}
            </table>
        </div>
    );
}

export default Table;