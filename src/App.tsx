import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import StatsSection from './components/StatsSection';
import Works from './components/WorkItem';
import AwardsAchievements from './components/AwardsAchievements';
import WorkExperience from './components/WorkExperience';
import Educations from './components/Educations';
import SkillsSection from './components/SkillsSection';
import PricingPlans from './components/PricingPlans';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import RotatingLogos from './components/RotatingLogos';
import ContactForm from './components/ContactForm';
import RecentBlog from './components/BlogCard';
import ProfileData from './components/Dmock.json'
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="text-white scroll-smooth">
      {/* <Navbar /> */}

      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home ProfileData={ProfileData}/>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center">
        <About ProfileData={ProfileData} />
      </section>

      <StatsSection StateData={ProfileData.stats}/>

      <section id="works" className="min-h-screen flex items-center justify-center">
        <Works projectData={ProfileData.projects}/>
      </section>

      {/* not required now */}
      {/* <section id="awards" className="min-h-screen flex items-center justify-center">
        <AwardsAchievements />
      </section> */}
      <section id="workexperience" className="min-h-screen flex items-center justify-center">
        <WorkExperience workExperienceData={ProfileData.workExperience}/>
      </section>
      <section id="educations" className="min-h-screen flex items-center justify-center">
        <Educations educationData={ProfileData.education} />
      </section>
      <section id="skillsection" className="flex items-center justify-center">
        <SkillsSection />
      </section>

      {/* not required now */}
      {/* <section id="pricingplans" className="min-h-screen flex items-center justify-center">
        <PricingPlans />
      </section> */}

      <section id="service" className="min-h-screen flex items-center justify-center">
        <Services serviceData={ProfileData.services} />
      </section>
      {/* <section id="testimonial" className="min-h-screen flex items-center justify-center">
        <Testimonial />
      </section> */}
      <section id="rotatinglogos" className="flex items-center justify-center">
        <RotatingLogos />
      </section>
      <section id="contact" className="flex items-center justify-center">
        <ContactForm contactData={ProfileData.contact} />
      </section>
      {/* <section id="blog" className="flex items-center justify-center">
        <RecentBlog  blogPostData={ProfileData.blogPost}/>
      </section> */}
      <section id="footer" className="flex items-center justify-center">
        <Footer socialIconData={ProfileData.socialIcons} />
      </section>
    </div>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="about" element={<About />} />
    //  {/* <Route path="/works" element={<Works />} />
    // <Route path="/service" element={<Service />} />
    // <Route path="/contact" element={<Contact />} />
    // <Route path="/blog" element={<Blog />} /> */}
    //   </Route>
    // </Routes>
  );
}

export default App;
