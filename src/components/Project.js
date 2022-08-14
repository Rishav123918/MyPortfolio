import React from "react";
import "../styles/Project.css";
import Link from "./Link";

function Project(props) {
    return (
        <div
            className={
                props.index % 2 === 0
                    ? "timeline-2 left-2"
                    : "timeline-2 right-2"
            }
        >
            <div className="card">
                <img
                    src={props.project.img}
                    className="card-img-top"
                    alt="project"
                    loading="lazy"
                />
                <div className="card-body p-4">
                    <h4 className="fw-bold mb-4">{props.project.name}</h4>
                    <p className="text-muted mb-4">
                        <i
                            className="fas fa-calendar-day"
                            aria-hidden="true"
                        ></i>{" "}
                        &nbsp;
                        {props.project.date}
                    </p>
                    <p className="mb-4">{props.project.description}</p>
                    <div className="d-flex flex-wrap">
                        {props.project.repoUrl !== "" ? (
                            <Link
                                name="Repository"
                                url={props.project.repoUrl}
                            />
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
        </div>

        // <div className="col">
        //     <div className="card">
        //         <img
        //             src={props.project.img}
        //             className="card-img-top"
        //             alt="project"
        //             loading="lazy"
        //         />
        //         <div className="card-body">
        //             <h5 className="card-title text-center">
        //                 {props.project.name}
        //             </h5>
        //         </div>
        //         <div className="card-footer d-flex justify-content-evenly">
        //             {props.project.repoUrl !== "" ? (
        //                 <Link name="Repository" url={props.project.repoUrl} />
        //             ) : (
        //                 ""
        //             )}
        //             {props.project.deployUrl !== "" ? (
        //                 <Link
        //                     name="Project Link"
        //                     url={props.project.deployUrl}
        //                 />
        //             ) : (
        //                 ""
        //             )}
        //         </div>
        //     </div>
        // </div>
    );
}

export default Project;
