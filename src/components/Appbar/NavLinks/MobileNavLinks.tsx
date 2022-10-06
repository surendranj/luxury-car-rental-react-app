import React from "react";
import BtnPrimary from "../../Buttons/BtnPrimary";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import Container from "../../Container/Container";
import { useAppDispatch } from "../../../app/hooks";
import { mobileNavActions } from "../../../features/mobileNav/mobileNavSlice";

const MobileNavLinks = () => {
    const dispatch = useAppDispatch();
    const { toggleNav } = mobileNavActions;
    return (
        <Container
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ type: "tween" }}
            className="font-display h-[90vh] backdrop-blur-3xl tablet:hidden text-white text-3xl "
        >
            <motion.ul className="h-full flex flex-col justify-around items-center">
                <NavLink toggle={() => dispatch(toggleNav())} text="Home" href="/" />
                <NavLink toggle={() => dispatch(toggleNav())} text="Garage" href="/garage" />
                <NavLink toggle={() => dispatch(toggleNav())} text="About Us" href="/about-us" />
                <NavLink toggle={() => dispatch(toggleNav())} text="Contact" href="/contact" />
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
            </motion.ul>
        </Container>
    );
};

export default MobileNavLinks;
