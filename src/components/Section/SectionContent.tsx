import React from "react";
import BtnPlain from "../Buttons/BtnPlain";
import Heading1 from "../Typography/Heading1";
import Paragraph from "../Typography/Paragraph";

type SectionContentProps = {
    gradient: string;
    h1Text: string;
    pText: string;
};

const SectionContent = ({ gradient, h1Text, pText }: SectionContentProps) => {
    return (
        <div className={`absolute top-0 left-0 w-full h-full ${gradient} tablet:bg-none px-6 desktop:px-0`}>
            <div className="relative top-[20%] flex flex-col justify-start items-start text-white ">
                <Heading1>{h1Text}</Heading1>
                <Paragraph className="text-sm mt-2 opacity-80">{pText}</Paragraph>
                <BtnPlain className="mt-10" />
            </div>
        </div>
    );
};

export default SectionContent;
