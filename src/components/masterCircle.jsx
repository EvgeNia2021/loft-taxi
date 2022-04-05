import React from "react";
import circle from "../../src/img/circle.svg";

const MasterCircle = () => {
    return (
        <div className="mastercard">
            <img
                src={circle}
                width="28"
                alt="logo"
                className="mastercard__circle"
            />
        </div>
    );
};

export default MasterCircle;