import React from "react";
import BtnPrimary from "../Buttons/BtnPrimary";

const Cta = () => {
    return (
        <div className="text-white  relative top-[30%] flex flex-col ml-6 ">
            <h1 className="font-display text-6xl">luxury Car Rentals</h1>
            <div className="mt-3">
                <h6>AMG GT Coupé</h6>
                <span>
                    <span className="text-orange">$800</span> / Day
                </span>
            </div>
            <BtnPrimary buttonText="Book Now" ghost className="mt-10" />
        </div>
    );
};

export default Cta;
