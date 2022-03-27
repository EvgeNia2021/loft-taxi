import React from "react";
import arrow from "../../img/arrow.svg";

const Arrow = () => {
    return (
        <div className="arrow">
            <img
                src={arrow}
                width="16"
                alt="arrow icon"
                className="arrow__icon"
            />
        </div>
    );
};

export default Arrow;