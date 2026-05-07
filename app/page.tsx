import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import AboutSection from "./components/AboutSection";
import WhoIsItFor from "./components/WhoIsItFor";
import LogoCloud from "./components/LogoCloud";
import Timeline from "./components/Timeline";
import ArchiveCards from "./components/ArchiveCards";
import CommunityNetwork from "./components/CommunityNetwork";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Testimonials />
        <AboutSection />
        <WhoIsItFor />
        <LogoCloud />
        <Timeline />
        <ArchiveCards />
        <CommunityNetwork />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
