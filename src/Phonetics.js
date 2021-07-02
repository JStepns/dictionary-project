import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
    return (
        <div className = "Phonetics">
            <span id="Text">
                {props.phonetics.text}
            </span>
            <a href={props.phonetics.audio} id="Audio" target="_blank" rel="noreferrer">
                🔊
            </a>
        </div>
    )
    }
    
