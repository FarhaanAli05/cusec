import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import AboutSection from "./components/AboutSection";
import WhoIsItFor from "./components/WhoIsItFor";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import ArchiveCards from "./components/ArchiveCards";
import CommunityNetwork from "./components/CommunityNetwork";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <AboutSection />
        <WhoIsItFor />
        <Speakers />
        <Sponsors />
        <ArchiveCards />
        <CommunityNetwork />
      </main>
      <Footer />
    </>
  );
}
