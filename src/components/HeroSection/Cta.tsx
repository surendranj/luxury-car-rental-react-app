import React from "react";
import BtnPrimary from "../Buttons/BtnPrimary";

const Cta = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-br from-[#252525] to-[rgba(255, 255, 255, 0)] tablet:bg-none px-6 desktop:px-0">
            <div className="text-white relative top-[30%]  flex flex-col ">
                <h1 className="font-display text-6xl">luxury Car Rentals</h1>
                <div className="mt-3">
                    <h6>AMG GT Coupé</h6>
                    <span>
                        <span className="text-orange">$800</span> / Day
                    </span>
                </div>
                <BtnPrimary buttonText="Book Now" ghost className="mt-10" />
            </div>
        </div>
    );
};

export default Cta;
