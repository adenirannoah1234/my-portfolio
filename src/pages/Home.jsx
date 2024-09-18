import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectsShowcase from '../components/Project';
import SkillsSection from '../components/Skilss';
import AboutMe from '../components/About';
import ContactForm from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsShowcase />
      <SkillsSection />
      <AboutMe />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
