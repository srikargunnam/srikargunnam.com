import Navbar from "@/components/Navbar";
import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <WelcomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

