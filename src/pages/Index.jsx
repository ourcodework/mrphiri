import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import VisionMissionSection from '../components/VisionMissionSection'
// import ProgrammesSection from '../components/ProgrammesSection'
import ServiceSection from '../components/ServiceSection'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

function Index() {
  return (
    <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        {/* <ProgrammesSection /> */}
        <ServiceSection />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default Index