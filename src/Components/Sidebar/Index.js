import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink className=" hover:text-green-600 " onClick={toggle} to='aboutme'>About</SidebarLink>
                    <SidebarLink className=" hover:text-green-600 " onClick={toggle} to='blog'>Blog</SidebarLink>
                    <SidebarLink className=" hover:text-green-600 " onClick={toggle} to='achievements'>Achievements</SidebarLink>
                    <SidebarLink className=" hover:text-green-600 " onClick={toggle} to='contactme'>Contact Me</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar