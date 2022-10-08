import Image from "next/image";
import React from "react";
import BtnPlain from "../Buttons/BtnPlain";
import Footnote from "../Typography/Footnote";
import Paragraph from "../Typography/Paragraph";

import { motion, Variants } from "framer-motion";

interface GarageCardProps {
    img: string;
    rent: number;
}

const cardVariants: Variants = {
    hover: {},
};
const imageVariants: Variants = {
    hover: { scale: 1.1 },
};

const GarageCard = (props: GarageCardProps) => {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={"hover"}
            className="flex flex-col items-center w-[300px] hover:cursor-pointer"
        >
            <motion.div variants={imageVariants} className="relative w-full h-[200px]">
                <Image src={`/images/cars/${props.img}.png`} layout={"fill"} alt={props.img} objectFit="contain" />
            </motion.div>
            <Paragraph className="text-xl opacity-100">{props.img}</Paragraph>
            <div className="flex justify-between w-full px-10 mt-3">
                <Footnote>
                    <span className="text-orange">{`${props.rent}`}</span> / day
                </Footnote>
                <BtnPlain>Book Now</BtnPlain>
            </div>
        </motion.div>
    );
};

export default GarageCard;
