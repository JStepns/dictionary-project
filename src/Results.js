import React from "react";
import "./Results.css";

export default function Results (props){
    if (props.results){
        return (
            <div className = "Results">
                <div className = "Container">
                    <h2>{props.results.word}</h2>
                    <p>{props.results.meanings[0].definitions[0].definition}</p>
                </div>
            </div>
    );
    } else {
        return null;
    }
}