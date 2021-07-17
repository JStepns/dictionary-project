import React from "react";
import './Photos.css';

export default function Photos(props) {
    if (props.photos) {
        return(
            <section className="Photos">
                        {props.photos.map(function (photo, index) {
                            return (
                                <div key={index}>
                                    <a href={photo.src.original} target="_blank" rel="noreferrer">
                                        <img src={photo.src.tiny} alt="searched word"/>
                                    </a>
                                </div>
                            );
                        })}
            </section>
        );
    } else {
        return null;
    }
}