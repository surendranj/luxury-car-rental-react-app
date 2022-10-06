import React from "react";
import { motion } from "framer-motion";

type BtnPrimaryProps = {
    buttonText: string;
    className?: string;
    ghost?: boolean;
    handleClick?: () => void;
};

const BtnPrimary = ({ buttonText, className, ghost, handleClick }: BtnPrimaryProps) => {
    return (
        <motion.button
            className={`font-sans text-xs rounded-sm w-[80px] h-[35px] desktop:w-[100px] text-white ${className} ${
                ghost ? "bg-none border border-orange" : " bg-orange "
            }  `}
            whileHover={{ y: -1, boxShadow: "0px 3px 5px -2px #E4572E" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
        >
            {buttonText}
        </motion.button>
    );
};

export default BtnPrimary;
