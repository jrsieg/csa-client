import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/home">Testimonials</FooterLink>
                                <FooterLink to="/home">Careers</FooterLink>

                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Legal</FooterLinkTitle>
                                <FooterLink to="/home">Investors</FooterLink>
                                <FooterLink to="/home">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick = {toggleHome}>
                        myCSA
                        </SocialLogo>
                        <WebsiteRights>myCSA copyright {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink> 

                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>     
                            

                            <SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>

                            
                            <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                                <FaYoutube/>
                            </SocialIconLink>          
                                                
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
