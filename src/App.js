import React from 'react';
import './App.css';
import API from "./utils/API";
import Header from "./components/Header";
import Table from"./components/Table";
import Filters from "./components/Filter";

function App() {

  const employees = API.getEmployees()

  const [results, setResults] = React.useState([]);


  return (
    <div>
      <Header />
      <Filters setResults={setResults}/>
      <Table employees={employees} results={results}/> 
    </div>
  );
}

export default App;