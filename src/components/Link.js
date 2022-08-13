import React from "react";
import "../styles/Link.css";

function Link(props) {
    return (
        <a className="links" href={props.url} target="_blank" rel="noreferrer">
            {props.name === "Repository" ? (
                <i className="fab fa-github fa-2x"></i>
            ) : (
                <i className="fas fa-globe fa-2x"></i>
            )}
            {/* &nbsp;&nbsp;{props.name} */}
        </a>
    );
}

export default Link;
