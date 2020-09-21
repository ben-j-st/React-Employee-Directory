import React from "react";
import SearchInput from '../SearchInput';
import SortOptions from '../SortOptions';
import API from "../../utils/API";
import "./style.css";

export default ({setResults}) => {

    const [state, setState] = React.useState ({
        search: "",
        results: [],
        error: ""
    });

    // Search form event handlers
    const handleInputChange = event => {
        
        setState({ search: event.target.value });

    }
    
    
    const handleFormSubmit = event => {
        event.preventDefault();
        
        if (state.search !== "") {
            const users = API.filterUsers(state.search)
            
            setResults(users);

        } else {
            setResults([]);
        }
    };

    // Sort event handler
    const handleSortSelect = sortKey => {

        let sortedArray = API.sortUsers(sortKey)

        setResults([...sortedArray]);
    }

    return (
        <div className="filters-box">
            <div className="search-col">
                <SearchInput 
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                />
            </div>
            <div className="sort-col">
                <SortOptions 
                handleSortSelect={handleSortSelect}
                />
            </div>
        </div>
    );
}

