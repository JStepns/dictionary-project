import React from "react";
import './Photos.css';

export default function Photos(props) {
    if (props.photos) {
        return(
            <section className = "Photos d-none d-sm-block">
                <div className = "row">
                    {props.photos.map(function (photo, index){
                        return (
                            <div className = "col-sm-6 col-lg-4" key={index}>
                                <img src={photo.src.tiny} className = "img-fluid" alt="searched word"/>
                            </div>
                        );
                    })}
                </div>   
            </section>
        );
    } else {
        return null;
    }
}