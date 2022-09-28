import React from "react";
import Container from "../Container/Container";
import Quotes from "../../../public/images/quotes1.svg";
import Image from "next/image";
import Paragraph from "../Typography/Paragraph";
import Heading1 from "../Typography/Heading1";
import Star from "../../../public/images/star.svg";
import Avatar from "../../../public/images/avatar.jpg";
import Footnote, { Footnote2 } from "../Typography/Footnote";
import ArrowLeft from "../../../public/images/left-arrow.svg";

type QuoteProps = {
    className?: string;
};
const Quote = ({ className }: QuoteProps) => {
    return (
        <div className={`relative w-6 h-5 ${className}`}>
            <Image src={Quotes} layout="fill" objectFit="contain" alt="open quotes" />
        </div>
    );
};

const StarIcon = () => {
    return (
        <div className="relative w-4 h-4 ">
            <Image src={Star} layout="fill" alt="star" objectFit="contain" />
        </div>
    );
};

const ArrowIcon = ({ className }: { className?: string }) => {
    return (
        <div className={`relative w-3 h-3 ${className}`}>
            <Image src={ArrowLeft} alt="left arrow" layout="fill" objectFit="contain" />
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="w-full">
            <Container className="px-6 py-20">
                <Heading1 className="text-center">Testimonials</Heading1>

                {/* Testimonials Container */}
                <div className="relative flex">
                    {/* Testimonial Card */}
                    <div className="flex mt-14 min-w-[300px] max-w-[500px]">
                        {/* Testimonial */}
                        <div className="flex justify-between min-h-[250px]">
                            <Quote className="self-start" />
                            <div className="flex flex-col justify-start max-w-[75%] self-center gap-y-4 my-10">
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                                    velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                                    torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet
                                    consectetur, adipisicing elit.
                                </Paragraph>

                                {/* stars */}
                                <div className="flex self-end gap-x-1">
                                    {[...Array(5).keys()].map((num) => (
                                        <StarIcon key={num} />
                                    ))}
                                </div>
                            </div>
                            <Quote className="rotate-180 self-end" />
                        </div>

                        {/* Avatar */}
                        <div>
                            <div className="relative w-20 h-20 rounded-md rounded-bl-none overflow-hidden">
                                <Image src={Avatar} alt="avatar" layout="fill" objectFit="cover" />
                            </div>

                            <Footnote>Wade Warren</Footnote>
                            <Footnote2>CEO, Figbe</Footnote2>
                        </div>
                    </div>

                    {/* Arrows */}
                    <div className="absolute flex gap-x-3 bottom-0 right-0">
                        <ArrowIcon />
                        <ArrowIcon className="rotate-180" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
