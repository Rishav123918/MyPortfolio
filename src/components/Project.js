import React from "react";
import "../styles/Project.css";
import Link from "./Link";
import { Image, Card, Typography } from "antd";
const { Title, Text } = Typography;
const { Meta } = Card;

function Project(props) {
    return (
        <div
            className={
                props.index % 2 === 0 ? "timeline left" : "timeline right"
            }
        >
            <Card
                style={{
                    borderRadius: "32px",
                    overflow: "hidden",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                cover={
                    <Image
                        preview={false}
                        style={{
                            maxHeight: "300px",
                            width: "auto",
                            maxWidth: "80%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block",
                            marginTop: "32px",
                            borderRadius: "32px",
                        }}
                        src={props.project.img}
                        placeholder={
                            <Image
                                preview={false}
                                src={props.project.img_low}
                            />
                        }
                    />
                }
                actions={[
                    <>
                        {props.project.repoUrl !== "" ? (
                            <Link
                                name="Repository"
                                url={props.project.repoUrl}
                            />
                        ) : (
                            ""
                        )}
                    </>,
                    <>
                        {props.project.deployUrl !== "" ? (
                            <Link
                                name="Project Link"
                                url={props.project.deployUrl}
                            />
                        ) : (
                            ""
                        )}
                    </>,
                ]}
            >
                <Meta
                    title={<Title level={3}>{props.project.name}</Title>}
                    description={
                        <>
                            <p className="mb-4">
                                <i
                                    className="fas fa-calendar-day"
                                    aria-hidden="true"
                                ></i>{" "}
                                &nbsp;
                                {props.project.date}
                            </p>
                            <Text>{props.project.description}</Text>
                        </>
                    }
                />
            </Card>
        </div>
    );
}

export default Project;
