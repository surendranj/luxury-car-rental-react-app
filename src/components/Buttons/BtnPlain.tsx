import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type BtnPlainProps = {
    className?: string;
    children: React.ReactNode;
    href?: string;
};

const buttonMotion = {
    hover: { color: "#E4572E" },
    tap: { scale: 0.9 },
    initial: {},
};
const arrowMotion = {
    hover: { x: 10 },
    initial: { x: 0 },
};
const pathMotion = {
    hover: { stroke: "#E4572E" },
    initial: { stroke: "#EFEFEF" },
};
const BtnPlain = ({ className, children, href }: BtnPlainProps) => {
    return (
        <Link href={href || "/"} scroll={false}>
            <motion.button
                initial={"initial"}
                whileHover={"hover"}
                whileTap={"tap"}
                variants={buttonMotion}
                className={`text-sm text-white flex justify-start items-center gap-x-3  ${className}`}
            >
                <motion.span>{children}</motion.span>
                <motion.svg
                    variants={arrowMotion}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                >
                    <motion.path
                        variants={pathMotion}
                        d="M3 7.66667H13.6667M9 3L13.6667 7.66667L9 12.3333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=" stroke-[1.33] "
                    />
                </motion.svg>
            </motion.button>
        </Link>
    );
};

export default BtnPlain;
