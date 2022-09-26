import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type NavLinkProp = {
    text: string;
    href: string;
};

const NavLink = ({ text, href }: NavLinkProp) => {
    return (
        <motion.li whileHover={{ opacity: 0.5 }}>
            <Link href={href}>
                <a>{text}</a>
            </Link>
        </motion.li>
    );
};

export default NavLink;
