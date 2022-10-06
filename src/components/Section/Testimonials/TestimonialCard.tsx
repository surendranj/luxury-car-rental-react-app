import React from "react";
import Paragraph from "../../Typography/Paragraph";
import Footnote, { Footnote2 } from "../../Typography/Footnote";
import Image, { StaticImageData } from "next/image";
import { motion, MotionProps } from "framer-motion";
import Quote from "./Quote";
import StarIcon from "./StarIcon";

interface TestimonialCardProps extends MotionProps {
    content: string;
    name: string;
    title: string;
    image: StaticImageData;
    carouselRef?: React.RefObject<HTMLDivElement>;
}

const TestimonialCard = ({ content, name, title, image, carouselRef, ...motionProps }: TestimonialCardProps) => {
    return (
        <motion.div ref={carouselRef} {...motionProps} className="flex mt-14 min-w-[320px] ">
            {/* Testimonial */}
            <div className="flex justify-between min-h-[250px]">
                <Quote className="self-start" />
                <div className="flex flex-col justify-start max-w-[75%] self-center gap-y-4 my-10">
                    <Paragraph>{content}</Paragraph>

                    {/* stars */}
                    <div className="flex self-end gap-x-1">
                        {[...Array(5).keys()].map((num) => (
                            <StarIcon key={num} />
                        ))}
                    </div>
                </div>
                <Quote className="rotate-180 self-end" />
            </div>

            {/* Avatar */}
            <div>
                <div className="relative w-20 h-20 rounded-md rounded-bl-none overflow-hidden">
                    <Image src={image} alt="avatar" layout="fill" objectFit="cover" />
                </div>

                <Footnote>{name}</Footnote>
                <Footnote2>{title}</Footnote2>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
