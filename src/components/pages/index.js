import React, {useState} from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar'
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../../components/InfoSection/Data'
import Services from '../Services'
import Footer from '../Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Services />
            <Footer/>
            
        </>
    )
}

export default Home
