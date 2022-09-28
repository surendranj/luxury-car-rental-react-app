import React from "react";
import Heading6 from "../Typography/Heading6";
import Paragraph from "../Typography/Paragraph";

type CardProps = {
    icon: JSX.Element;
    heading: string;
    content: string;
};

const Card = ({ icon, heading, content }: CardProps) => {
    return (
        <div className="w-full text-white border border-white rounded-md flex flex-col justify-start items-center p-2">
            {/* card icon */}
            {/* <LocationIcon /> */}
            {icon}
            {/* card heading */}
            <Heading6>{heading}</Heading6>
            {/* card description */}
            <Paragraph className="text-center mt-4">{content}</Paragraph>
        </div>
    );
};

export default Card;
