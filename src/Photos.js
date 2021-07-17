import React from "react";
import './Photos.css';

export default function Photos(props) {
    if (props.photos) {
        return(
            <section className = "Photos">
                <div className = "row">
                    <div className = "col-4">
                        <img src={props.photos[0].src.tiny} alt="searched word"/>
                    </div>
                    <div className = "col-4">
                        <img src={props.photos[1].src.tiny} alt="searched word"/>
                    </div>
                    <div className = "col-4">
                        <img src={props.photos[2].src.tiny} alt="searched word"/>
                    </div>
                </div>   
            </section>
        );
    } else {
        return null;
    }
}