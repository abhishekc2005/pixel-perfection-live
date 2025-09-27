import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TeamSection />
      <VideoSection />
      <AboutSection />
      <StorySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
