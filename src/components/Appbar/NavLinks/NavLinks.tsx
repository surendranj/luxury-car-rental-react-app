import React from "react";
import BtnPrimary from "../../Buttons/BtnPrimary";
import NavLink from "./NavLink";

const NavLinks = () => {
    return (
        <ul className="hidden tablet:flex grow text-white justify-between items-center font-display text-xl gap-x-16 desktop:gap-x-24">
            <li className="grow">
                <ul className="flex justify-between">
                    <NavLink text="Home" href="/" />
                    <NavLink text="Garage" href="/garage" />
                    <NavLink text="About Us" href="/about-us" />
                    <NavLink text="Faq" href="/faq" />
                </ul>
            </li>

            {/* Nav Buttons */}
            <li>
                <ul className="flex gap-x-7">
                    <li>
                        <BtnPrimary>Sign In</BtnPrimary>
                    </li>
                    <li>
                        <BtnPrimary ghost>Register</BtnPrimary>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default NavLinks;
