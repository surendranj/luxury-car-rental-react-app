import React, { useEffect, useRef, useState } from "react";

import Container from "../../Container/Container";
import Heading1 from "../../Typography/Heading1";
import TestimonialCard from "./TestimonialCard";

import { useAppSelector } from "../../../app/hooks";
import { motion, useAnimationControls, useMotionValue, Variants } from "framer-motion";

const Testimonials = () => {
    const { testimonials } = useAppSelector((state) => state);
    const carousel = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);

    const [moveTo, setMoveTo] = useState(0);

    useEffect(() => {
        if (carousel.current && container.current) {
            setMoveTo(-carousel.current.scrollWidth / 2 - container.current.offsetLeft);
        }
    }, []);

    const currXpos = useMotionValue(0);
    const duration = 10;
    const initialVelocity = -moveTo / duration;
    const carouselMotion: Variants = {
        move: {
            x: moveTo,
            transition: {
                ease: "linear",
                duration,
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    };

    const controls = useAnimationControls();
    useEffect(() => {
        controls.start("move");
    });

    const handleHoverStart = () => {
        controls.stop();
        controls
            .start("move", {
                ease: "linear",
                duration: (currXpos.get() - moveTo) / (initialVelocity / 2),
            })
            .then(() => {
                currXpos.set(0);
                controls.start("move", {
                    ease: "linear",
                    duration: (currXpos.get() - moveTo) / (initialVelocity / 2),
                    repeat: Infinity,
                    repeatType: "loop",
                });
            });
    };

    const handleHoverEnd = () => {
        controls.stop();
        controls
            .start("move", {
                ease: "linear",
                duration: (currXpos.get() - moveTo) / initialVelocity,
            })
            .then(() => {
                currXpos.set(0);
                controls.start("move");
            });
    };

    return (
        <section className="w-full">
            <Container className="relative px-6 tablet:px-10 py-20 overflow-hidden h-fit">
                <Heading1 className="text-center">Testimonials</Heading1>

                <div ref={container} className="relative">
                    {/* for carousel fade */}
                    <div className="absolute z-10 -left-6 tablet:-left-10 w-[15%] h-[100%] bg-gradient-to-r from-black "></div>
                    <div className="absolute z-10 -right-6 tablet:-right-10 w-[15%] h-[100%] bg-gradient-to-l from-black "></div>

                    {/* Testimonials Container */}
                    <motion.div
                        ref={carousel}
                        style={{ x: currXpos }}
                        variants={carouselMotion}
                        initial={false}
                        animate={controls}
                        onHoverStart={handleHoverStart}
                        onHoverEnd={handleHoverEnd}
                        className="relative flex justify-between items-start gap-10 tablet:gap-20 h-[500px] "
                    >
                        {/* Testimonial Card */}

                        {[...testimonials, ...testimonials].map((el, idx) => {
                            const { testimonial, avatar, name, title } = el;
                            return (
                                <TestimonialCard
                                    content={testimonial}
                                    image={avatar}
                                    name={name}
                                    title={title}
                                    key={idx}
                                />
                            );
                        })}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
