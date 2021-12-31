import React from "react";

function Link(props) {
    return (
        <a
            className="btn btn-outline-primary"
            href={props.url}
            target="_blank"
            rel="noreferrer"
        >
            {props.name}
        </a>
    );
}

export default Link;
