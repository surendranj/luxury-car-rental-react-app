import Image from "next/image";
import React from "react";
import SVGLogo from "../../../public/images/icons/Logo.svg";

type LogoProps = {
    className?: string;
};
const Logo = ({ className }: LogoProps) => {
    return (
        <div className={`relative h-full w-[20%] ${className}`}>
            <Image src={SVGLogo} alt="logo" layout="fill" objectFit="contain" objectPosition="0% 50%" />
        </div>
    );
};

export default Logo;
