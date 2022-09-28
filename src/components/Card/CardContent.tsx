import React from "react";

type CardContentProps = {
    heading: string;
    content: string;
};
const CardContent = ({ heading, content }: CardContentProps) => {
    return (
        <>
            {/* card heading */}
            <h6>{heading}</h6>
            {/* card description */}
            <p className="text-xs text-center opacity-80 mt-8">{content}</p>
        </>
    );
};

export default CardContent;
