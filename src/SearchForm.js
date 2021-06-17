import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";

export default function SearchForm() {
    let [searchWord, setSearchWord] = useState("");

    function handleResponse(response) {
        console.log(response.data);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for the definition of ${searchWord}`);

        //API documentation here:https://dictionaryapi.dev/
        
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchWord}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSearchWordChange(event) {
        setSearchWord(event.target.value);
    }

    return (
        <div className="SearchForm">
            <form onSubmit={search}>
                <input type="search" onChange={handleSearchWordChange} />
                <input type="submit" value="Find definition" />
            </form>
        </div>
    );
}