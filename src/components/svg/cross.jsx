import React from "react";
import cross from "../../img/cross.svg";

const Cross = () => {
    return (
        <div className="cross">
            <img
                src={cross}
                width="14"
                height="14"
                alt="cross icon"
                className="cross__icon"
            />
        </div>
    );
};

export default Cross;