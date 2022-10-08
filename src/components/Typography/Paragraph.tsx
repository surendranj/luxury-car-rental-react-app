import { motion, MotionProps } from "framer-motion";
import React from "react";

interface ParagraphProps extends MotionProps {
    className?: string;
    children: React.ReactNode;
}

const Paragraph = ({ className, children, ...motionProps }: ParagraphProps) => {
    return (
        <motion.p {...motionProps} className={`text-white text-sm opacity-80 ${className}`}>
            {children}
        </motion.p>
    );
};

export default Paragraph;
