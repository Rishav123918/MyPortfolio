import React from "react";

function Project(props) {
    return (
        <div className="col">
            <div className="card">
                <img
                    src={props.project.img}
                    className="card-img-top"
                    alt="project"
                />
                <div className="card-body">
                    <h5 className="card-title">{props.project.name}</h5>
                </div>
                <div className="card-footer"></div>
            </div>
        </div>
    );
}

export default Project;
