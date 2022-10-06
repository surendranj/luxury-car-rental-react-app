import React from "react";
import BtnPrimary from "../Buttons/BtnPrimary";
import Heading1 from "../Typography/Heading1";
import Heading6 from "../Typography/Heading6";

import { motion } from "framer-motion";

const Cta = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-full h-full  bg-gradient-to-br from-[#252525] to-[rgba(255, 255, 255, 0)] tablet:bg-none px-6 tablet:px-10"
        >
            <div className="text-white relative top-[30%] tablet:top-[35%] flex flex-col  ">
                <Heading1>luxury Car Rentals</Heading1>
                <div className="mt-3">
                    <Heading6>AMG GT Coupé</Heading6>
                    <span>
                        <span className="text-orange">$800</span> / Day
                    </span>
                </div>
                <BtnPrimary buttonText="Book Now" ghost className="mt-10" />
            </div>
        </motion.div>
    );
};

export default Cta;
