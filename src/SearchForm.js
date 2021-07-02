import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./SearchForm.css";

export default function SearchForm(props) {
    let [searchWord, setSearchWord] = useState(props.defaultSearchWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
        //API documentation here:https://dictionaryapi.dev/
        
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchWord}`;
        axios.get(apiUrl).then(handleResponse)
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        search();  
    }

    function handleSearchWordChange(event) {
        setSearchWord(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
        <div className="SearchForm">
            <h2>What word are you looking for?</h2>
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleSearchWordChange} autofocus="on" id="SearchBar" />
                    <input type="submit" value="Search" id="SearchButton" />
                </form>
            </section>
            <Results results={results}/>
        </div>
    );
    } else {
        load();
        return "Loading";
    }

    
}