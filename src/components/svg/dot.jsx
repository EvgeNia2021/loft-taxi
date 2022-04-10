import React from "react";
import dot from "../../img/dot.svg";

const Dot = () => {
    return (
        <div className="dot">
            <img
                src={dot}
                width="14"
                alt="dot icon"
                className="dot__icon"
            />
        </div>
    );
};

export default Dot;