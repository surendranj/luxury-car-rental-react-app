import React from "react";
import { motion } from "framer-motion";

type BtnPrimaryProps = {
    buttonText: string;
    className?: string;
    ghost?: boolean;
};

const BtnPrimary = ({ buttonText, className, ghost }: BtnPrimaryProps) => {
    return (
        <motion.button
            className={`font-sans text-xs rounded-sm w-[80px] h-[35px] desktop:w-[100px] text-white ${className} ${
                ghost ? "bg-none border border-orange" : " bg-orange "
            }  `}
            whileHover={{ y: -1, boxShadow: "0px 3px 5px -2px #E4572E" }}
        >
            {buttonText}
        </motion.button>
    );
};

export default BtnPrimary;
