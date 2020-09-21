import React from "react";
import "./style.css";

function Row(props) {

    return (
        <tbody>
              <tr key={props.employee.id}>
                <td data-th="Avatar" className="align-middle">
                  <img
                    src={props.employee.avatar}
                    alt={"profile image for " + props.employee.name.first + " " + props.employee.name.last}
                    className="img-responsive user-img"
                  />
                </td>
                <td data-th="Name" className="align-middle">
                  {props.employee.name.first} {props.employee.name.last}
                </td>
                <td data-th="Gender" className="align-middle">
                  {props.employee.gender}
                </td>
               
                <td data-th="Email" className="align-middle">
                  <a href={"mailto:" + props.employee.email} target="__blank">
                    {props.employee.email}
                  </a>
                </td>
                <td data-th="Department" className="align-middle">
                  {props.employee.department}
                </td>
                <td data-th="JobTitle" className="align-middle">
                  {props.employee.job_title}
                </td>
              </tr>
      </tbody>
    );
}

export default Row;