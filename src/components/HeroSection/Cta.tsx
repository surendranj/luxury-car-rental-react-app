import React from "react";
import BtnPrimary from "../Buttons/BtnPrimary";
import Heading1 from "../Typography/Heading1";
import Heading6 from "../Typography/Heading6";

const Cta = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-br from-[#252525] to-[rgba(255, 255, 255, 0)] tablet:bg-none px-6 desktop:px-0">
            <div className="text-white relative top-[30%]  flex flex-col ">
                <Heading1>luxury Car Rentals</Heading1>
                <div className="mt-3">
                    <Heading6>AMG GT Coupé</Heading6>
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
