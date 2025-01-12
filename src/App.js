import styled from 'styled-components';
import './App.css';
import { Footer } from './modules/footer';
import Header from './modules/header';
import ContactUs from './pages/contactUs';
import AboutUs from './pages/aboutUs';
import Services from './pages/services';
import ProfessionalSection from './modules/professional-section';
import MaintenanceSection from './modules/maintenance-section';

const SectionHeader = styled.h2``

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MaintenanceSection></MaintenanceSection>
      <AboutUs></AboutUs>
      <ProfessionalSection></ProfessionalSection>
      <Services></Services>
      <SectionHeader>WHAT OUR CILENT SAY</SectionHeader>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
