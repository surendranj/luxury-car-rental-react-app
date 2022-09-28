import Image, { StaticImageData } from "next/image";
import React from "react";

type BrandProps = {
    brandImg: StaticImageData;
    alt: string;
};

const Brand = ({ brandImg, alt }: BrandProps) => {
    return (
        <div className="relative w-10 h-10">
            <Image src={brandImg} alt={alt} layout="fill" />
        </div>
    );
};

export default Brand;
