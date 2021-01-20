import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinksScroll, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import LoginModal from '../auth/LoginModal/LoginModal';

export const Navbar = (props) => {


  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }

    const [scrollNav, setScrollNav] = useState(false)
    

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        myCSA
                    </NavLogo>
                    <MobileIcon onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinksScroll to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinksScroll>
                        </NavItem>
                        <NavItem>
                            <NavLinksScroll to="howitworks" smooth={true} duration={500} spy={true} exact='true' offset={-80}>How It Works</NavLinksScroll>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/browsecsas" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Browse CSAs</NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn onClick={openModal}>Modal</NavBtn>
                    <LoginModal showModal={showModal} setShowModal={setShowModal} />
                    {/* <NavBtn>
                        <NavBtnLink to="/customersignup">Customer Sign Up</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/csasignup">CSA Sign Up</NavBtnLink>
                    </NavBtn> */}

                </NavbarContainer>
            </Nav>
            </IconContext.Provider>

        </>
    );
};

export default Navbar;
