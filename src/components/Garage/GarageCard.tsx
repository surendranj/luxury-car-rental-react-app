import Image from "next/image";
import React from "react";
import BtnPlain from "../Buttons/BtnPlain";
import Footnote from "../Typography/Footnote";
import Paragraph from "../Typography/Paragraph";

interface GarageCardProps {
    img: string;
    rent: number;
}

const GarageCard = (props: GarageCardProps) => {
    return (
        <div className="flex flex-col items-center w-[300px]">
            <div className="relative w-full h-[200px]">
                <Image src={`/images/cars/${props.img}.png`} layout={"fill"} alt={props.img} objectFit="contain" />
            </div>
            <Paragraph className="text-xl opacity-100">{props.img}</Paragraph>
            <div className="flex justify-between w-full px-10 mt-3">
                <Footnote>
                    <span className="text-orange">{`${props.rent}`}</span> / day
                </Footnote>
                <BtnPlain>Book Now</BtnPlain>
            </div>
        </div>
    );
};

export default GarageCard;
