import React from "react";
import "../styles/Project.css";
import Link from "./Link";

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
                        <Link name="Repository" url={props.project.repoUrl} />
                    ) : (
                        ""
                    )}
                    {props.project.deployUrl !== "" ? (
                        <Link
                            name="Deployed Link"
                            url={props.project.deployUrl}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;
