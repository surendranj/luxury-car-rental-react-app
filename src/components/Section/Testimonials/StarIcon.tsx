import Image from "next/image";
import React from "react";

import Star from "../../../../public/images/icons/star.svg";

const StarIcon = () => {
    return (
        <div className="relative w-4 h-4 ">
            <Image src={Star} layout="fill" alt="star" objectFit="contain" />
        </div>
    );
};

export default StarIcon;
