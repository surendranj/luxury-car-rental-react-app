import Image from "next/image";
import React from "react";
import SVGLogo from "../../../public/images/logo.svg";

const Logo = () => {
    return (
        <div className="relative h-full w-[10%] ">
            <Image src={SVGLogo} alt="logo" layout="fill" />
        </div>
    );
};

export default Logo;
