import React from 'react'
import TopHeader from '../Components/TopHeader'
import MainNavbar from '../Components/MainNavbar'
import AboutSection from '../Components/AboutSection';
import BelowAboutSection from '../Components/BelowAboutSection';
import BelowServicesSection from '../Components/BelowServicesSection';
import TrustedBy from '../Components/TrustedBy';
import MoreClientsSection from '../Components/MoreClientsSection';
import AboveFooter from '../Components/AboveFooter';
import Footer from '../Components/Footer';
import CopyrightStrip from '../Components/CopyrightStrip';

function About() {
  return (  
    <div>
      <TopHeader/>
      <MainNavbar/>
      <AboutSection/>
      <br/>
      <BelowAboutSection/>
      <br/>
      <BelowServicesSection/>
      <br/>
      <TrustedBy/>
      <br/>
      <MoreClientsSection/>
      <br/>
      <AboveFooter/>
      <Footer/>
      <CopyrightStrip/>
    </div>
  )
}

export default About;
