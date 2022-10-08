import Image from "next/image";
import Link from "next/link";
import React from "react";
import BtnPrimary from "../Buttons/BtnPrimary";
import Container from "../Container/Container";
import { Heading1Small } from "../Typography/Heading1";
import Paragraph from "../Typography/Paragraph";

const AboutUs = () => {
    return (
        <section className="relative w-full h-screen">
            <Container className=" h-screen px-6 tablet:px-10 flex justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="relative w-full h-full">
                        <Image
                            src={"/images/cars/About us bg image.png"}
                            alt="background image"
                            layout="fill"
                            objectFit="cover"
                            objectPosition={"right bottom"}
                        />
                    </div>
                </div>
                <div className="relative flex flex-col items-center gap-7 tablet:gap-10 laptop:gap-30">
                    <Heading1Small className="text-center text-2xl tablet:text-4xl desktop:text-5xl font-sans leading-6 ">
                        That wonderful feeling – you start the engine and your adventure begins…
                    </Heading1Small>
                    <Paragraph className="text-center text-xs tablet:text-sm desktop:text-lg  opacity-100 font-light ">
                        At Top Down everything we do is about giving you the freedom to discover more. We’ll move
                        mountains to find you the right rental car, and bring you a smooth, hassle-free experience from
                        start to finish.
                    </Paragraph>
                    <BtnPrimary className="mt-10 w-28">
                        <Link href={"/garage"} scroll={false}>
                            <a>Get Started</a>
                        </Link>
                    </BtnPrimary>
                </div>
            </Container>
        </section>
    );
};

export default AboutUs;
