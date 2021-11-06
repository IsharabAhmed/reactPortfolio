import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLink, NavMenu } from './NavbarElements'
import { FaBars } from 'react-icons/fa'



const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">AMAVA</NavLogo>
                    <MobileIcon>
                         <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="aboutme">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="achievements">Achievements</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contactme">Contact Me</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
