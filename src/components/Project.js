import React from "react";
import "../styles/Project.css";

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
                <div className="card-footer">
                    {props.project.repoUrl !== "" ? (
                        <a
                            className="btn btn-outline-primary"
                            href={props.project.repoUrl}
                        >
                            Repository
                        </a>
                    ) : (
                        ""
                    )}
                    {props.project.deployUrl !== "" ? (
                        <a
                            className="btn btn-outline-primary"
                            href={props.project.deployUrl}
                        >
                            Deployed Link
                        </a>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;
