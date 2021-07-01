import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./SearchForm.css";

export default function SearchForm() {
    let [searchWord, setSearchWord] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

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
                <input type="submit" value="Search" />
            </form>
            <Results results={results}/>
        </div>
    );
}