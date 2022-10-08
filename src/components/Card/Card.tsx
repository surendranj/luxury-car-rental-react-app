import React from "react";
import Heading6 from "../Typography/Heading6";
import Paragraph from "../Typography/Paragraph";

import { motion } from "framer-motion";

type CardProps = {
    icon: JSX.Element;
    heading: string;
    content: string;
};

const Card = ({ icon, heading, content }: CardProps) => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="w-full text-white border border-white rounded-md flex flex-col justify-start items-center p-2"
        >
            {/* card icon */}
            {/* <LocationIcon /> */}
            {icon}
            {/* card heading */}
            <Heading6 className="text-center tablet:mt-4">{heading}</Heading6>
            {/* card description */}
            <Paragraph className="text-center mt-4 tablet:mt-8">{content}</Paragraph>
        </motion.div>
    );
};

export default Card;
