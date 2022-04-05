import React from "react";
import horizontalLogo from "../../img/horizontalLogo.svg";

const HorizontalLogo = () => {
    return (
        <div className="horizontal-logo">
            <img
                src={horizontalLogo}
                width="269"
                alt="logo"
                className="horizontal__logo"
            />
        </div>
    );
};

export default HorizontalLogo;
