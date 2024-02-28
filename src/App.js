import logo from './logo.svg';
import './App.css';
import TopHeader from './Components/TopHeader';
import MainNavbar from './Components/MainNavbar';
import ContactUsForm from './Components/ContactUsForm';
import LandingPageLeftSectionWithContactForm from './Components/LandingPageLeftSectionWithContactForm';
import BelowContactSection from './Components/BelowContactSection';
import CustomersSection from './Components/CustomersSection';
import CustomerImagesSection2 from './Components/CustomerImagesSection2';
import OurServicesSection from './Components/OurServicesSection';
import Services from './Components/Services';
import BelowServicesSection from './Components/BelowServicesSection';
import KeyFeatures from './Components/KeyFeatures';
import MoreClientsSection from './Components/MoreClientsSection';
import DoctestFitYourNeeds from './Components/DoctestFitYourNeeds';
import TrustedBy from './Components/TrustedBy';
import RecomendedBy from './Components/RecomendedBy';
import Faqs from './Components/Faqs';

function App() {
  return (
    <>
    <TopHeader/>
    <MainNavbar/>
    <br/>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <LandingPageLeftSectionWithContactForm />
          </div>
          <div class="col">
              <ContactUsForm/>
          </div>
        </div>
        <br/>
      </div>
      <BelowContactSection/>
      <CustomersSection/>
      <br/>
      <CustomerImagesSection2/>
      <br/>
      <OurServicesSection/>
      <br/>
      <Services/>
      <br/>
      <BelowServicesSection/>
      <KeyFeatures/>
      <MoreClientsSection/>
      <br/>
      <DoctestFitYourNeeds/>
      <br/>
      <TrustedBy/>
      <br/>
      <RecomendedBy/>
      <br/>
      <Faqs/>
    </>
  );
}

export default App;
