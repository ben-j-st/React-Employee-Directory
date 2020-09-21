import React, { useEffect } from 'react';
import './App.css';
import API from "./utils/API"

function App() {

  const employee = API.getEmployees()

  const [results, setResults] = useState([]);

  
  useEffect(() => {
    // a list of sorted employees
    const sortedEmployees = sortEmployees(EmployeeData, sortState)

    // a list of filtered employees
    const filteredAndSorted
  }, [sortState, filterState])
  return (
    // put components inside here
    <div className="App">

    </div>
  );
}

export default App;
