import React from "react";
import tick from "../../img/tick.svg";

const Tick = () => {
    return (
        <div className="tick">
            <img
                src={tick}
                width="16"
                height="10"
                alt="tick icon"
                className="tick__icon"
            />
        </div>
    );
};

export default Tick;