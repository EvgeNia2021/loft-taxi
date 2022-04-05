import React from "react";
import cardIconSvg from "../../src/img/cardIcon.svg";

const CardIcon = () => {
    return (
        <div className="card-icon">
            <img
                src={cardIconSvg}
                width="29"
                alt="logo"
                className="card__icon"
            />
        </div>
    );
};

export default CardIcon;