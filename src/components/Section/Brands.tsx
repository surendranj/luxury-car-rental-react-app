import React from "react";
import Container from "../Container/Container";
import astonMartin from "../../../public/images/brands/aston-martin.png";
import audi from "../../../public/images/brands/audi.png";
import bmw from "../../../public/images/brands/bmw.png";
import bugatti from "../../../public/images/brands/bugatti.png";
import ferrari from "../../../public/images/brands/ferrari.png";
import jaguar from "../../../public/images/brands/jaguar.png";
import lamborghini from "../../../public/images/brands/lamborghini.png";
import landRover from "../../../public/images/brands/land-rover.png";
import maserati from "../../../public/images/brands/maserati.png";
import mclaren from "../../../public/images/brands/mclaren.png";
import mercedes from "../../../public/images/brands/mercedes.png";
import porsche from "../../../public/images/brands/porsche.png";
import Image from "next/image";
import Heading1 from "../Typography/Heading1";

type BrandContainerProps = {
    children: React.ReactNode;
};
const BrandContainer = ({ children }: BrandContainerProps) => {
    return <div className="relative w-10 h-10">{children}</div>;
};

const Brands = () => {
    return (
        <section className="w-full">
            <Container className="px-6 py-20">
                <Heading1 className="text-center mb-6">Our Brands</Heading1>
                <div className="flex justify-center flex-wrap gap-4">
                    <BrandContainer>
                        <Image src={astonMartin} alt="Aston Martin" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={audi} alt="Audi" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={bmw} alt="BMW" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={maserati} alt="Maserati" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={landRover} alt="Land Rover" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={mclaren} alt="McLaren" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={mercedes} alt="Mercedes" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={lamborghini} alt="Lamborghini" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={porsche} alt="Porsche" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={jaguar} alt="Jaguar" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={ferrari} alt="Ferrari" layout="fill" />
                    </BrandContainer>
                    <BrandContainer>
                        <Image src={bugatti} alt="Bugatti" layout="fill" />
                    </BrandContainer>
                </div>
            </Container>
        </section>
    );
};

export default Brands;
