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
                    <h5 className="card-title text-center">
                        {props.project.name}
                    </h5>
                </div>
                <div className="card-footer d-flex justify-content-evenly">
                    {props.project.repoUrl !== "" ? (
                        <Link name="Repository" url={props.project.repoUrl} />
                    ) : (
                        ""
                    )}
                    {props.project.deployUrl !== "" ? (
                        <Link
                            name="Project Link"
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
