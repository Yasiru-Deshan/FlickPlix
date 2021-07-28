import React,{ useEffect } from 'react';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
         ServicesH1,
         ServicesH2,
         ServicesContainer,
         ServicesWrapper,
         ServicesCard,
         ServicesIcon,
         Servicesp
} from './Advertisements-styles';
import Aos from 'aos';
import "aos/dist/aos.css";


const Services = () => {

    useEffect(()=>{
        Aos.init({duration: 2000 });
    },[])

    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>

                <ServicesCard data-aos="fade-right" >
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <Servicesp>We help reduce your fees and increase your overall revenue</Servicesp>
                </ServicesCard>

                <ServicesCard data-aos="fade-right">
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <Servicesp>We help reduce your fees and increase your overall revenue</Servicesp>
                </ServicesCard>

                <ServicesCard data-aos="fade-right">
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benifit</ServicesH2>
                    <Servicesp>We help reduce your fees and increase your overall revenue</Servicesp>
                </ServicesCard>



            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services
