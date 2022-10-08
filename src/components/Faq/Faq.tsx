import React, { useState } from "react";
import Container from "../Container/Container";
import Heading1 from "../Typography/Heading1";
import { AnimatePresence } from "framer-motion";
import { faqs } from "./faqs";
import Question from "./Question";
import Answer from "./Answer";

type AccordionProps = {
    question: string;
    answer: string;
};

const Accordion = ({ question, answer }: AccordionProps) => {
    const [expanded, setExpanded] = useState(false);
    const questionProps = { expanded, setExpanded, question };
    return (
        <div className="w-full ">
            <Question {...questionProps} />
            <AnimatePresence initial={false}>{expanded && <Answer answer={answer} />}</AnimatePresence>
        </div>
    );
};

const Faq = () => {
    return (
        <section className="w-full pb-40">
            <Container className="min-h-screen flex flex-col gap-14 laptop:gap-10 justify-start px-6 tablet:px-10 pt-32">
                <Heading1 className="text-center text-orange">FAQ</Heading1>
                <div className="flex flex-col gap-10">
                    {faqs.map((faq, idx) => (
                        <Accordion key={idx} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Faq;
