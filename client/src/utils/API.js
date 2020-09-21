import employeeData from "./employeeData";

export default{ 
    getEmployees:function(){    

        return employeeData;
    },

    // search by first name
    filterUsers:function(searchedText) {
        
        return employeeData.filter(data => 

            // non-case sensitive search entries
            data.name.first === searchedText[0].toUpperCase() + searchedText.slice(1)
           
        )
    },

    sortUsers:function(sortKey) {
        let newEmployeeArray;

        // Sort by first name
        if (sortKey === "firstName") {
            newEmployeeArray = employeeData.sort(function(a, b){
                if (a.name.first.toUpperCase() > b.name.first.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })
    
            return newEmployeeArray;
        }

        // sort by last name
        if (sortKey === "lastName") {
            newEmployeeArray = employeeData.sort(function(a, b){
                if (a.name.last.toUpperCase() > b.name.last.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })
    
            return newEmployeeArray;
        }

        // sort by gender
        if (sortKey === "gender") {
            newEmployeeArray = employeeData.sort(function(a, b){
                if (a.gender.toUpperCase() > b.gender.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })

            return newEmployeeArray;
        }
        
        // sort by Department
        if (sortKey === "department") {
            newEmployeeArray = employeeData.sort(function(a, b){
                if (a.department.toUpperCase() > b.department.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })

            return newEmployeeArray;
        }

        // sort by job_title
        if (sortKey === "jobTitle") {
            newEmployeeArray = employeeData.sort(function(a, b){
                if (a.job_title.toUpperCase() > b.job_title.toUpperCase()) {
                    return 1
                } else {
                    return -1
                }
            })

            return newEmployeeArray;
        }
    }
};