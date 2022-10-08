import React from "react";

import { motion } from "framer-motion";
import { Heading1Small } from "../Typography/Heading1";

type QuestionProps = {
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    question: string;
};
const Question = ({ expanded, setExpanded, question }: QuestionProps) => {
    return (
        <motion.header
            initial={false}
            onClick={() => setExpanded(!expanded)}
            animate={{ backgroundColor: expanded ? "#EFEFEF" : "#191919" }}
            className={`flex justify-between items-center border border-white rounded px-3 py-1 hover:cursor-pointer `}
        >
            <Heading1Small animate={{ color: expanded ? "#E4572E" : "#EFEFEF" }} className="text-lg w-[80%]">
                {question}
            </Heading1Small>
            <motion.svg
                animate={expanded ? "open" : "closed"}
                width="18"
                height="18"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    variants={{
                        open: { stroke: "#EFEFEF", d: "M15.5 1.5, L15.5 30.5" },
                        closed: { stroke: "#EFEFEF", d: "M1.5 15.5, L30.5 15.5" },
                    }}
                    strokeLinecap="round"
                    className=" stroke-[3]"
                />
                <motion.path
                    variants={{
                        open: { stroke: "#E4572E", d: "M1.5 15.5, L30.5 15.5" },
                        closed: { stroke: "#EFEFEF", d: "M15.5 30.5, L15.5 1.5" },
                    }}
                    strokeLinecap="round"
                    className="stroke-[3]"
                />
            </motion.svg>
        </motion.header>
    );
};

export default Question;
