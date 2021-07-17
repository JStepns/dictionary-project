import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./SearchForm.css";

export default function SearchForm(props) {
    let [searchWord, setSearchWord] = useState(props.defaultSearchWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        //Dictionary API documentation here:https://dictionaryapi.dev/
        
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchWord}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        //Pexels API documentation here:https://www.pexels.com/api/documentation/ 

        let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${searchWord}&per_page=3`;
        let pexelsApiKey= "563492ad6f9170000100000162411f52d9994660b045a680c52444df";
        let headers= {Authorization : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
                    <input type="search" onChange={handleSearchWordChange} autofocus="on" id="SearchBar" defaultValue="blue" />
                    <input type="submit" value="Search" id="SearchButton" />
                </form>
            </section>
            <Results results={results}/>
            <Photos photos={photos}/>
        </div>
    );
    } else {
        load();
        return "Loading";
    }
}