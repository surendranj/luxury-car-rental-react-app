import React from "react";
import BtnPrimary from "../../Buttons/BtnPrimary";
import Container from "../../Container/Container";
import NavLink from "./NavLink";

const MobileNavLinks = () => {
    return (
        <Container className="font-display h-[90vh] backdrop-blur-3xl tablet:hidden text-white text-3xl ">
            <ul className="h-full flex flex-col justify-around items-center">
                <NavLink text="Home" href="/" />
                <NavLink text="Garage" href="/garage" />
                <NavLink text="About Us" href="/about-us" />
                <NavLink text="Contact" href="/contact" />
                <li>
                    <ul className="flex gap-x-7">
                        <li>
                            <BtnPrimary buttonText="Sign In" className="text-sm w-[100px]" />
                        </li>
                        <li>
                            <BtnPrimary buttonText="Register" ghost className="text-sm w-[100px]" />
                        </li>
                    </ul>
                </li>
            </ul>
        </Container>
    );
};

export default MobileNavLinks;
