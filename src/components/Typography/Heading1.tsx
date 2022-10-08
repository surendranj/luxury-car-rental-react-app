import { motion, MotionProps } from "framer-motion";
import React from "react";

interface Heading1Props extends MotionProps {
    className?: string;
    children: React.ReactNode;
}

const Heading1 = ({ className, children }: Heading1Props) => {
    return <h1 className={`font-display text-6xl text-white ${className}`}>{children}</h1>;
};

export const Heading1Small = ({ className, children, ...motionProps }: Heading1Props) => {
    return (
        <motion.h1 {...motionProps} className={`font-sans text-white ${className}`}>
            {children}
        </motion.h1>
    );
};

export default Heading1;
