import React from "react";

function Link(props) {
    return (
        <a className="btn" href={props.url} target="_blank" rel="noreferrer">
            {props.name === "Repository" ? (
                <i className="fab fa-github"></i>
            ) : (
                <i className="fas fa-globe"></i>
            )}
            &nbsp;{props.name}
        </a>
    );
}

export default Link;
