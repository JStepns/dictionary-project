import React, { useState } from "react";
import "./SearchForm.css";

export default function SearchForm() {
    let [searchWord, setSearchWord] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for the definition of ${searchWord}`);
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