import React from 'react'
import TopHeader from '../Components/TopHeader';
import MainNavbar from '../Components/MainNavbar';
import ContactUsBanner from '../Components/ContactUsBanner';
import BelowContactSection from '../Components/BelowContactSection';
import Footer from '../Components/Footer';
import CopyrightStrip from '../Components/CopyrightStrip';
import ContactWithGrid from '../Components/ContactWithGrid';
import MainContactUsForm from '../Components/MainContactUsForm';

const ContactUs = () => {
  return (
    <div>
      <TopHeader/>
      <MainNavbar/> 
      <ContactUsBanner/>
      <BelowContactSection/>
      <ContactWithGrid/>
      <MainContactUsForm/>
      <br/><br/>
      <Footer/>
      <CopyrightStrip/>
    </div>
  )
}

export default ContactUs
