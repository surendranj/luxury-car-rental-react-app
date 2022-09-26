import Image from "next/image";
import React from "react";
import SVGLogo from "../../../public/images/logo.svg";

const Logo = () => {
    return (
        <div className="relative h-full w-[20%] ">
            <Image src={SVGLogo} alt="logo" layout="fill" objectFit="contain" objectPosition="0% 50%" />
        </div>
    );
};

export default Logo;
