import { useRouter } from "next/router";
import React from "react";
import BtnPrimary from "../src/components/Buttons/BtnPrimary";
import Container from "../src/components/Container/Container";
import Heading1 from "../src/components/Typography/Heading1";
import Paragraph from "../src/components/Typography/Paragraph";

const Custom404 = () => {
    const router = useRouter();
    return (
        <section className="w-full">
            <Container className="w-full h-screen px-6 tablet:px-10 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-5">
                    <Heading1 className="text-9xl">404</Heading1>
                    <Paragraph>Page Not Found</Paragraph>
                    <BtnPrimary buttonText="Go Back" handleClick={() => router.back()} />
                </div>
            </Container>
        </section>
    );
};

export default Custom404;
