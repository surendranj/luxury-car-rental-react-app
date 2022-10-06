import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

type TransitionProps = {
    children: React.ReactNode;
};
const Transition = ({ children }: TransitionProps) => {
    const router = useRouter();
    return (
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <motion.div
                key={router.asPath}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: "tween", duration: 1 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Transition;
