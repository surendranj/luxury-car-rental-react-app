import { motion, MotionProps } from "framer-motion";
import React from "react";

interface ContainerProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
    containerRef?: React.RefObject<HTMLDivElement>;
}

const Container = ({ className, children, containerRef, ...motionProps }: ContainerProps) => {
    return (
        <motion.div
            ref={containerRef}
            {...motionProps}
            key="container"
            className={`w-full max-w-[1160px] mx-auto  ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Container;
