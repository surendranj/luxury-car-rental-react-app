import Image from "next/image";
import React from "react";
import Quotes from "../../../../public/images/icons/quotes1.svg";

type QuoteProps = {
    className?: string;
};
const Quote = ({ className }: QuoteProps) => {
    return (
        <div className={`relative w-6 h-5 ${className}`}>
            <Image src={Quotes} layout="fill" objectFit="contain" alt="open quotes" />
        </div>
    );
};

export default Quote;
