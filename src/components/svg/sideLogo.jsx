import React from "react";
import logo from "../../img/logo.svg";

const Logo = () => {
    return (
        <div className="side-logo">
            <img
                src={logo}
                width="192"
                alt="logo"
                className="side__logo"
            />
        </div>
    );
};

export default Logo;
