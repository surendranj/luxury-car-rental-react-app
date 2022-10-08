import React from "react";

import { motion } from "framer-motion";
import Paragraph from "../Typography/Paragraph";

type AnswerProps = {
    answer: string;
};
const Answer = ({ answer }: AnswerProps) => {
    return (
        <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
            <motion.div
                variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                transition={{ duration: 0.8 }}
                className="pt-5"
            >
                <Paragraph>{answer}</Paragraph>
            </motion.div>
        </motion.section>
    );
};

export default Answer;
