import React from "react";
import { Card } from "antd";

function Skill(props) {
    return (
        <div className="text-center mb-4 col-6 col-sm-4 col-md-3 col-lg-2">
            <Card
                style={{
                    borderRadius: "32px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
            >
                <div className="display-2 mt-3">{props.skill.icon}</div>
                <p>{props.skill.name}</p>
            </Card>
        </div>
    );
}

export default Skill;
