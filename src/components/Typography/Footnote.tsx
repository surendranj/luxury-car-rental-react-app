import React from "react";
import { motion, MotionProps } from "framer-motion";

interface FootnoteProps extends MotionProps {
    className?: string;
    children: React.ReactNode;
}
const Footnote = ({ className, children }: FootnoteProps) => {
    return <p className={`text-white text-[12px] tablet:text-sm ${className}`}>{children}</p>;
};

export const Footnote2 = ({ className, children, whileHover }: FootnoteProps) => {
    return (
        <motion.p whileHover={whileHover} className={`text-white text-[10px] tablet:text-xs font-light ${className}`}>
            {children}
        </motion.p>
    );
};

export default Footnote;
