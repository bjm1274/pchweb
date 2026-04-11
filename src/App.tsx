import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MedicalTeam from './components/MedicalTeam';
import SupportTeamSection from './components/SupportTeamSection';
import Departments from './components/Departments';
import MakoSection from './components/MakoSection';
import EquipmentSection from './components/EquipmentSection';
import LocationInfo from './components/LocationInfo';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import BackgroundAudio from './components/BackgroundAudio';
import HomepagePopup from './components/HomepagePopup';
import PatientGuideModal from './components/PatientGuideModal';

function App() {
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <div className="font-sans">
      <HomepagePopup />
      <BackgroundAudio />
      <Header onOpenGuide={() => setGuideOpen(true)} />
      <SocialSidebar />
      <main>
        <HeroSection />
        <AboutSection />
        <MedicalTeam />
        <SupportTeamSection />
        <Departments />
        <MakoSection />
        <EquipmentSection />
        <LocationInfo />
      </main>
      <PatientGuideModal open={guideOpen} onClose={() => setGuideOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;
