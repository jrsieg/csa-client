import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='howitworks' onClick={toggle}>
                    How It Works
                </SidebarLink>
                <SidebarLink to='findyourcsa' onClick={toggle}>
                    Find Your CSA
                </SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
