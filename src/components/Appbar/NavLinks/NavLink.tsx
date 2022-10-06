import Link from "next/link";
import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRouter } from "next/router";

type NavLinkProp = {
    text: string;
    href: string;
    toggle?: () => void;
};

const listVariant: Variants = {
    hover: {},
};

const divVariant: Variants = {
    hover: { backgroundColor: "#E4572E" },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
const NavLink = ({ text, href, toggle }: NavLinkProp) => {
    const router = useRouter();

    const handleClick = () => {
        toggle && toggle();
    };

    return (
        <motion.li
            whileHover={"hover"}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            variants={listVariant}
            className="flex flex-col items-center"
            onClick={handleClick}
        >
            <Link href={href} scroll={false}>
                <a>{text}</a>
            </Link>

            {/* Underline animated div */}
            <AnimatePresence>
                {router.asPath === href && router.pathname !== "/404" ? (
                    <motion.div
                        key="underline"
                        variants={divVariant}
                        className={`w-full h-[2px] bg-white`}
                    ></motion.div>
                ) : (
                    <motion.div variants={divVariant} className={`w-full h-[2px]`}></motion.div>
                )}
            </AnimatePresence>
        </motion.li>
    );
};

export default NavLink;
