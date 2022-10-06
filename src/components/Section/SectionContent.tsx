import React from "react";
import BtnPlain from "../Buttons/BtnPlain";
import Heading1 from "../Typography/Heading1";
import Paragraph from "../Typography/Paragraph";

import { motion, MotionProps } from "framer-motion";

interface SectionContentProps extends MotionProps {
    className?: string;
    gradient: string;
    h1Text: string;
    pText: string;
}

const SectionContent = ({
    className,
    gradient,
    h1Text,
    pText,
    initial,
    whileInView,
    transition,
}: SectionContentProps) => {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className={`absolute top-0 left-0 w-full h-full ${gradient} tablet:bg-none px-6 tablet:px-10 `}
        >
            <div
                className={`relative top-[15%] flex flex-col justify-start items-start text-white tablet:w-[350px] tablet:absolute tablet:right-10 ${className}`}
            >
                <Heading1>{h1Text}</Heading1>
                <Paragraph className="text-sm mt-2 opacity-80 tablet:w-[320px]">{pText}</Paragraph>
                <BtnPlain href="/garage" className="mt-10">
                    Explore
                </BtnPlain>
            </div>
        </motion.div>
    );
};

export default SectionContent;
