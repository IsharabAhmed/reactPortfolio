import React, { useState } from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElement'

import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight } from './HeroElements'


function HeroSection() {

    const [hover, setHover] = useState(false)

    const onHover = () => { 
        setHover(!hover)
    }



    return (
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={ Video } type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Find the best solution for projects</HeroH1>
                    <HeroP>
                    Strong management and security for powerful features. Clean and creative best software design for your customers.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='resume' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
                            My Résumé {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
    )
}

export default HeroSection
