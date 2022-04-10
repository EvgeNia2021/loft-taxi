import React from "react";
import cardLogoSvg from "../../img/cardLogo.svg";

const CardLogo = () => {
    return (
        <div className="card-logo">
            <img
                src={cardLogoSvg}
                width="33"
                alt="logo"
                className="card__logo"
            />
        </div>
    );
};

export default CardLogo;