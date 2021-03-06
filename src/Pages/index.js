import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar/Index';
import Navbar from '../Components/Navbar/index';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';


export const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div>
            <Sidebar isOpen={ isOpen } toggle={ toggle } />
            <Navbar toggle={ toggle } />
            <HeroSection />
            <InfoSection />

        </div>
    )
}
