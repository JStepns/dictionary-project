import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    return (
        <div className = "Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index)
            {
                return (
                    <div key={index}>
                        <div className = "Definition">
                            {definition.definition}
                        </div>
                        <div className = "Example">
                            {definition.example}
                        </div>
                            <Synonyms synonyms={definition.synonyms} />
                    </div>
                );
            })}
        </div>
    );
}