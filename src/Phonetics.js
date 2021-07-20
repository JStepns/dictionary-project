import React from "react";
import "./Phonetics.css";
import megaphone from "./images/audio-icon.png";

export default function Phonetics(props) {
    return (
        <div className = "Phonetics">
            <span id="Text">
                {props.phonetics.text}
            </span>
            <a href={props.phonetics.audio} id="Audio" target="_blank" rel="noreferrer">
                <img src={megaphone} className="Audio-icon img-fluid" alt="audio" />
            </a>
        </div>
    )
    }
    
