import React,{ useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import Services from '../../components/Advertisements';
import Footer from '../../components/Footer';
import { homeObjOne,homeObjTwo,homeObjThree  } from '../../components/InfoSection/Data';


const Home = () => {

    return (
       <>
        
        <HeroSection />
        <Services/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjThree}/>
        
   
        
        </>
    )
}

export default Home
