import Link from "next/link";
import React from "react";
import Container from "../Container/Container";
import Footnote, { Footnote2 } from "../Typography/Footnote";
import AppleLogo from "../../../public/images/social/AppleLogo.svg";
import FacebookLogo from "../../../public/images/social/FacebookLogo.svg";
import GooglePlayLogo from "../../../public/images/social/GooglePlayLogo.svg";
import InstagramLogo from "../../../public/images/social/InstagramLogo.svg";
import TwitterLogo from "../../../public/images/social/TwitterLogo.svg";
import YoutubeLogo from "../../../public/images/social/YoutubeLogo.svg";
import Image from "next/image";
import Paragraph from "../Typography/Paragraph";

import { motion } from "framer-motion";

const footerLinks = [
    { title: "Company", links: ["About", "Newsroom", "Catalog", "Feedback"] },
    { title: "My Account", links: ["Blog", "FAQ"] },
    { title: "Legal", links: ["Terms", "Privacy", "Cookies"] },
    { title: "Contact", links: ["Partnership", "(406) 555-0120", "2464 Royal Ln. Mesa, New Jersey 45463"] },
];

const socialLinks = [
    { title: "Download App", logos: [AppleLogo, GooglePlayLogo] },
    { title: "Follow Us", logos: [FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo] },
];

type FooterLinkContainerProps = {
    className?: string;
    children: React.ReactNode;
};
const FooterLinkContainer = ({ className, children }: FooterLinkContainerProps) => {
    return <div className={`w-28 tablet:w-36 ${className}`}>{children}</div>;
};

type FooterLinksProps = {
    footerLink: { title: string; links: string[] };
};

const FooterLinks = ({ footerLink }: FooterLinksProps) => {
    return (
        <FooterLinkContainer>
            <Footnote>{footerLink.title}</Footnote>
            <div className="mt-2">
                {footerLink.links.map((link) => {
                    return (
                        <div key={link} className="mt-1">
                            <Link href={`/${link.toLocaleLowerCase()}`}>
                                <a>
                                    <Footnote2 whileHover={{ color: "#E4572E", textDecoration: "underline" }}>
                                        {link}
                                    </Footnote2>
                                </a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </FooterLinkContainer>
    );
};

type SocialLinksProps = {
    socialLink: { title: string; logos: any[] };
};
const SocialLinks = ({ socialLink }: SocialLinksProps) => {
    return (
        <FooterLinkContainer>
            <Footnote>{socialLink.title}</Footnote>
            <motion.div animate className="mt-2 flex gap-x-2">
                {socialLink.logos.map((logo, idx) => {
                    return (
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative mt-1 w-5 h-5 tablet:w-8 tablet:h-8 hover:cursor-pointer"
                            key={`${idx}`}
                        >
                            <Image src={logo} alt="apple logo" objectFit="contain" />
                        </motion.div>
                    );
                })}
            </motion.div>
        </FooterLinkContainer>
    );
};
const Footer = () => {
    return (
        <section className="w-full">
            <Container className="px-6 tablet:px-10 py-20 flex flex-wrap gap-10">
                {footerLinks.map((link) => (
                    <FooterLinks footerLink={link} key={link.title} />
                ))}
                {socialLinks.map((link) => (
                    <SocialLinks socialLink={link} key={link.title} />
                ))}
                <Paragraph className="text-[10px] font-thin w-full ">
                    Copyright &#169; 2022 Top Down Private Limited
                </Paragraph>
            </Container>
        </section>
    );
};

export default Footer;
